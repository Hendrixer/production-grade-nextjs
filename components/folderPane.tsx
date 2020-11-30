import React, { FC } from 'react'
import { Pane, Heading, majorScale, DocumentIcon, Button } from 'evergreen-ui'
import Link from 'next/link'
import { getRandomGradientCss } from '../utils/gradients'

const FolderPane: FC<{ folder: any; docs: any[] }> = ({ folder, docs }) => {
  const { bg, image } = getRandomGradientCss()
  return (
    <Pane>
      <Pane width="100%" height="200px" backgroundColor={bg} backgroundImage={image} />
      <Pane padding={majorScale(4)}>
        <Heading size={900} marginBottom={majorScale(4)}>
          {folder.name}
        </Heading>

        <Pane display="flex" alignItems="center">
          {docs.map((doc) => (
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
    </Pane>
  )
}

export default FolderPane
