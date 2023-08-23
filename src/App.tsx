import React from "react"

import Navbar from "./components/Navbar"
import AppIntroduction from "./components/AppIntroduction"

import { Box, useColorModeValue } from "@chakra-ui/react"

function App() {
  return (
    <Box m={4}>
      <Navbar />
      <AppIntroduction />
    </Box>
  )
}

export default App
