import { AppShell } from '@mantine/core'
import { HeaderSimple } from './components/HeaderComponent/HeaderSimple'
import { FooterSocial } from './components/FooterSocial/FooterSocial'
import { HeroTitle } from './components/HeroTitle/HeroTitle'
import { GetInTouchSimple } from './components/GetInTouchSimple/GetInTouchSimple'
import { FeaturesCards } from './components/FeaturesCards/FeaturesCards'
import { FeaturesTitle } from './components/FeaturesTitle/FeaturesTitle'
import { CustomDivider } from './components/CustomDivider/CustomDivider'
import './App.css'

function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <HeaderSimple />
      </AppShell.Header>

      <AppShell.Main>
        <HeroTitle/>
        <CustomDivider/>
        <FeaturesCards />
        <CustomDivider/>
        <FeaturesTitle />
        <CustomDivider/>
        <GetInTouchSimple />
      </AppShell.Main>

      <AppShell.Footer>
        <FooterSocial />
      </AppShell.Footer>
    </AppShell>
  )
}

export default App
