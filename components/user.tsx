import React, { FC } from 'react'
import { Pane, Position, Avatar, Popover, Menu, LogOutIcon } from 'evergreen-ui'
import { signOut } from 'next-auth/client'
import { UserSession } from '../types'

const User: FC<{ user: UserSession }> = ({ user }) => {
  return (
    <Pane position="fixed" top={20} right={20}>
      <Popover
        position={Position.BOTTOM_LEFT}
        content={
          <Menu>
            <Menu.Item icon={LogOutIcon} intent="danger" onSelect={signOut}>
              Sign out
            </Menu.Item>
          </Menu>
        }
      >
        <Pane
          elevation={2}
          background="white"
          borderRadius="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={user.image} size={48} cursor="pointer" />
        </Pane>
      </Popover>
    </Pane>
  )
}

export default User
