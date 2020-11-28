import React from 'react'
import { Pane } from 'evergreen-ui'

const Container = ({ children, ...styles }) => (
  <Pane maxWidth="960px" marginX="auto" width="100%" {...styles}>
    {children}
  </Pane>
)

export default Container
