import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import { majorScale, Pane, Heading } from 'evergreen-ui'
import path from 'path'
import fs from 'fs'
import Head from 'next/head'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)

  return (
    <Pane>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  const paths = filenames.map((name) => ({ params: { slug: name.replace('.mdx', '') } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`)
  const postFile = fs.readFileSync(postPath, 'utf-8')
  const { content, data } = matter(postFile)
  const mdxSource = await renderToString(content, { scope: data })

  return { props: { source: mdxSource, frontMatter: data } }
}

export default BlogPost
