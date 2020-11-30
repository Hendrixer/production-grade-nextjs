import React, { FC, useState } from 'react'
import { Pane, Heading, majorScale, DocumentIcon, Button } from 'evergreen-ui'
import Link from 'next/link'
import { getRandomGradientCss } from '../utils/gradients'
import NewFolderButton from './newFolderButton'
import NewDocDialog from './newDocumentDialog'

const FolderPane: FC<{ folder: any; docs: any[] }> = ({ folder, docs }) => {
  const { bg, image } = getRandomGradientCss()
  const [isShown, setIsShown] = useState(false)
  const [allDocs, setDocs] = useState(docs || [])

  const handleNewDoc = async (name: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/doc/`, {
      method: 'POST',
      body: JSON.stringify({ name, folder: folder._id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { data } = await res.json()
    setDocs((state) => [...state, data])
  }

  return (
    <Pane>
      <Pane width="100%" height="200px" backgroundColor={bg} backgroundImage={image} />
      <Pane padding={majorScale(4)}>
        <Pane display="flex" justifyContent="content" alignItems="center" marginBottom={majorScale(4)}>
          <NewFolderButton tooltip="New Document" size={30} onClick={() => setIsShown(true)} />
          <Heading size={900} marginLeft={majorScale(2)}>
            {folder.name}
          </Heading>
        </Pane>

        <Pane display="flex" alignItems="center" flexWrap="wrap">
          {allDocs.map((doc) => (
            <Pane key={doc._id} width="33%">
              <Link href={`/app/${folder._id}/${doc._id}`}>
                <a>
                  <Button intent="none" appearance="minimal" iconBefore={DocumentIcon} height={48} color="tint1">
                    {doc.name}
                  </Button>
                </a>
              </Link>
            </Pane>
          ))}
        </Pane>
      </Pane>

      <NewDocDialog isShown={isShown} onNewDoc={handleNewDoc} close={() => setIsShown(false)} />
    </Pane>
  )
}

FolderPane.defaultProps = {
  docs: [],
}

export default FolderPane
