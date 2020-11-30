import React, { FC } from 'react'
import { Pane, Heading, majorScale } from 'evergreen-ui'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { getRandomGradientCss } from '../utils/gradients'

const Editor = dynamic(() => import('./editor'), { ssr: false })

const DocPane: FC<{ folder: any; doc: any }> = ({ folder, doc }) => {
  const { bg, image } = getRandomGradientCss()

  return (
    <Pane>
      <Pane width="100%" height="200px" backgroundColor={bg} backgroundImage={image} />
      <Pane padding={majorScale(4)}>
        <Heading size={900} marginBottom={majorScale(4)}>
          <Link href={`/app/${folder._id}`}>
            <a>{folder.name}</a>
          </Link>
          {` / `}
          {doc.name}
        </Heading>

        <Pane display="flex" alignItems="center">
          <Editor content={doc.content} docId={doc._id} />
        </Pane>
      </Pane>
    </Pane>
  )
}

export default DocPane
