import React, { FC } from 'react'
import { Icon, PlusIcon, Pane, Tooltip } from 'evergreen-ui'

const NewFolderButton: FC<{ onClick: any }> = ({ onClick }) => {
  return (
    <Tooltip content="New Folder">
      <Pane onClick={onClick}>
        <Icon icon={PlusIcon} size={42} cursor="pointer" />
      </Pane>
    </Tooltip>
  )
}

export default NewFolderButton
