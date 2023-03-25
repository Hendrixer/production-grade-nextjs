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

const Blog = ({ posts }) => {
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

Blog.defaultProps = {
  posts: [],
}

export async function getStaticProps(ctx) {
  const cmsPosts = (ctx.preview ? postsFromCMS.draft : postsFromCMS.published).map((post) => {
    const { data } = matter(post)
    return data
  })

  const postsPath = path.join(process.cwd(), 'posts')
  const filenames = await fs.promises.readdir(postsPath)
  
  const filePosts = await Promise.all(filenames.map(async (name) => {
    /** get file fullpath with  */
    const fullPath = path.join(process.cwd(), "posts", name)

    /** read file content  */
    const file = await fs.promises.readFile(fullPath, 'utf-8')

    /** convert data to an object with matter lib */
    const { data } = matter(file)

    /** return the data */
    return data
  }))
  

  const posts = [...cmsPosts, ...filePosts]

  return {
    props: { posts },
  }
}

export default Blog

/**
 * Need to get the posts from the
 * fs and our CMS
 */
