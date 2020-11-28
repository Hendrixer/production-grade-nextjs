import React from 'react'
import { Pane, majorScale, Card, TextInputField, Button, Link, Text } from 'evergreen-ui'
import NextLink from 'next/link'
import Logo from '../components/logo'

const Signin = () => {
  return (
    <Pane height="100vh" width="100vw" display="flex">
      <Pane
        height="100%"
        width="50%"
        borderRight
        paddingX={majorScale(8)}
        paddingY={majorScale(5)}
        background="#579AD9"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane>
          <Logo color="white" fontSize="60px" />
          <Pane marginTop={majorScale(2)}>
            <Text color="white" fontSize="22px">
              Sign up.
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
        <Card elevation={1} padding={majorScale(2)} background="white" width="100%">
          <form action="">
            <TextInputField label="Email" placeholder="email" />
            <TextInputField label="Password" placeholder="password" />
            <Pane display="flex" justifyContent="space-between" alignItems="center">
              <NextLink href="/signin" passHref>
                <Link>Already have an account?</Link>
              </NextLink>
              <Button appearance="minimal" height={48}>
                Signup
              </Button>
            </Pane>
          </form>
        </Card>
      </Pane>
    </Pane>
  )
}

export default Signin
