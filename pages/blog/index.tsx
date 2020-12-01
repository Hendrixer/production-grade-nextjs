import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import orderby from 'lodash.orderby'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import PostPreview from '../../components/postPreview'
import { posts as postsFromCMS } from '../../content'

export default function Blog({ posts }) {
  return (
    <Pane>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          {posts.map((post) => (
            <Pane key={post.title} marginY={majorScale(5)}>
              <PostPreview post={post} />
            </Pane>
          ))}
        </Container>
      </main>
    </Pane>
  )
}

export async function getStaticProps(ctx) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  const cmsPosts = ctx.preview ? postsFromCMS.draft : postsFromCMS.published
  const filePosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    return fs.readFileSync(filePath, 'utf8')
  })

  const posts = orderby(
    [...cmsPosts, ...filePosts].map((content) => {
      const { data } = matter(content)
      return data
    }),
    ['publishedOn'],
    ['desc'],
  )

  return { props: { posts } }
}
