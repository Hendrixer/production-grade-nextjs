import React from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'

const Hero = () => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)}px)`}
    >
      <Pane>
        <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginBottom={majorScale(8)}>
          A beautiful knowledge base for your whole team.
        </Heading>
        <Paragraph fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.2rem, 4vw, 2rem)">
          High performing teams use Known to document and record everything. Some other cool SaaS tag line here.
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
