import React from 'react'
//import Breakpoints from 'utils/breakpoints'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import Work from 'components/work'
import Other from 'components/other'
import Writing from 'components/writing'
import Footer from 'components/footer'

//import DarkModeToggle from 'components/handleTheme'

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        {/* <Breakpoints /> */}
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'projects'}>
          <Work />
        </Section>
        <Section >
          <Other />
        </Section>
{/*        <Section>
         <Writing />
        </Section> */}
        <Footer />
      </GlobalWrapper>
    )
  }
}
