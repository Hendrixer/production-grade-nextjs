import React from 'react'
import { Pane, majorScale } from 'evergreen-ui'
import Container from '../components/container'
import Hero from '../components/hero'
import HomeNav from '../components/homeNav'
import FeatureSection from '../components/featureSection'

export default function Home() {
  return (
    <Pane>
      <header>
        <HomeNav />
        <Container>
          <Hero />
        </Container>
      </header>
      <main>
        <FeatureSection
          title="Record everything"
          body="blah blah blah blah blah blah blah blah blah blah blah blah"
          image="https://via.placeholder.com/300"
          invert
        />
        <FeatureSection
          title="Record everything"
          body="blah blah blah blah blah blah blah blah blah blah blah blah"
          image="https://via.placeholder.com/300"
        />
        <FeatureSection
          title="Record everything"
          body="blah blah blah blah blah blah blah blah blah blah blah blah"
          image="https://via.placeholder.com/300"
          invert
        />
      </main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          <Container>hello</Container>
        </Pane>
      </footer>
    </Pane>
  )
}
