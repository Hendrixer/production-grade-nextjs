import React, { FC } from 'react'
import { Pane, majorScale, Text, Button } from 'evergreen-ui'
import NextLink from 'next/link'
import Container from './container'
import Logo from './logo'

const HomeNav: FC<{ links?: { name: string; link: string }[]; authButton?: boolean }> = ({ links, authButton }) => {
  return (
    <nav>
      <Pane width="100vw" paddingY={majorScale(1)} borderBottom height={majorScale(9)}>
        <Container height="100%">
          <Pane display="flex" justifyContent="space-between" alignItems="center" height="100%">
            <Logo />

            <Pane display="flex" justifyContent="space-around" alignItems="center">
              {links && links.length > 0
                ? links.map((link) => (
                    <Pane paddingX={majorScale(3)} key={link.name}>
                      <NextLink href="/blog">
                        <a>
                          <Text fontSize="16px">Blog</Text>
                        </a>
                      </NextLink>
                    </Pane>
                  ))
                : null}

              {authButton ? (
                <Pane paddingX={majorScale(3)}>
                  <NextLink href="/signin">
                    <a>
                      <Button appearance="primary" fontSize="16px">
                        Sign up
                      </Button>
                    </a>
                  </NextLink>
                </Pane>
              ) : null}
            </Pane>
          </Pane>
        </Container>
      </Pane>
    </nav>
  )
}

HomeNav.defaultProps = {
  authButton: true,
  links: [{ name: 'Blog', link: '/blog' }],
}

export default HomeNav
