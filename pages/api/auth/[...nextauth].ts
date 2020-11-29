import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDB, folder, doc } from '../../../db'

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    // Configure one or more authentication providers
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      // ...add more providers here
    ],

    database: `${process.env.DATABASE_URL}?synchronize=true`,
    pages: {
      signIn: '/signin',
    },
    callbacks: {
      jwt: async (token, user, account, profile, isNewUser) => {
        const { db } = await connectToDB()

        if (isNewUser) {
          const personalFolder = await folder.createFolder(db, { createdBy: `${user.id}`, name: 'personal' })
          await doc.createDoc(db, {
            name: 'Getting started',
            folder: personalFolder._id,
            createdBy: user.id,
            content: '## Hello there',
          })
        }

        return Promise.resolve(token)
      },
    },
  })
