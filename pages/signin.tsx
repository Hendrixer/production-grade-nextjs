import React from 'react'
import { Pane, majorScale, Text } from 'evergreen-ui'
import Logo from '../components/logo'

import SocialButton from '../components/socialButton'

const Signin = () => {
  return (
    <Pane height="100vh" width="100vw" display="flex">
      <Pane
        height="100%"
        width="50%"
        borderRight
        paddingX={majorScale(8)}
        paddingY={majorScale(5)}
        background="#47B881"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane>
          <Logo color="white" fontSize="60px" />
          <Pane marginTop={majorScale(2)}>
            <Text color="white" fontSize="22px">
              Sign in.
            </Text>
          </Pane>
        </Pane>
      </Pane>
      <Pane
        height="100%"
        width="50%"
        background="tint2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={majorScale(7)}
      >
        <Pane width="100%" textAlign="center">
          <SocialButton type="github" onClick={() => {}} />
        </Pane>
      </Pane>
    </Pane>
  )
}

export default Signin
