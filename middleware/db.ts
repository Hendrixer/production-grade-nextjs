import mongoose from 'mongoose'
import { connectToDB } from '../db/connect'

mongoose.Promise = Promise

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any
    }
  }
}

export default async function database(req, res, next) {
  const { db, dbClient } = await connectToDB()
  req.db = db
  req.dbClinet = dbClient

  next()
}
