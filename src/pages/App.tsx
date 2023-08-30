import React from "react"
import AppIntroduction from "./components/AppIntroduction"

import { Box } from "@chakra-ui/react"
import Contributors from "./components/Contributors"
import Features from "./components/Features"

function App() {
  return (
    <Box>
      <AppIntroduction />
      <Contributors />
      <Features />
    </Box>
  )
}

export default App
