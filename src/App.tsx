import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Flex, AppShell, Burger, Button, Paper } from '@mantine/core'
import { FaSun, FaMoon } from 'react-icons/fa'
import './App.css'
import { HeaderSimple } from './components/HeaderComponent/HeaderSimple'
import { FooterSocial } from './components/FooterSocial/FooterSocial'
import { HeroTitle } from './components/HeroTitle/HeroTitle'
import { GetInTouchSimple } from './components/GetInTouchSimple/GetInTouchSimple'
import { FeaturesCards } from './components/FeaturesCards/FeaturesCards'
import { FeaturesTitle } from './components/FeaturesTitle/FeaturesTitle'

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
        <HeroTitle />
        <FeaturesCards />
        <FeaturesTitle />
        <GetInTouchSimple />
      </AppShell.Main>

      <AppShell.Footer>
        <FooterSocial />
      </AppShell.Footer>
    </AppShell>
  )
}

export default App
