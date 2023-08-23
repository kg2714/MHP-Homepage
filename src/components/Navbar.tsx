import {
  Menu,
  MenuList,
  MenuItem,
  Button,
  Flex,
  MenuButton,
  Text,
  useColorMode,
} from "@chakra-ui/react"
import React from "react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex>
      <Text>Music</Text>
      <Button
        as="button"
        onClick={() => {
          toggleColorMode()
        }}
      >
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Menu>
        <MenuButton>
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Me</MenuItem>
          <MenuItem>Me</MenuItem>
          <MenuItem>Me</MenuItem>
          <MenuItem>Me</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default Navbar
