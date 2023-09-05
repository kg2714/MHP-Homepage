import React from "react"
import { Outlet, Link } from "react-router-dom"
import {
  Menu,
  MenuList,
  MenuItem,
  Button,
  Flex,
  MenuButton,
  Text,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"

const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex
        css={{
          backdropFilter: "blur(5px) opacity(130%)",
          position: "fixed",
          top: "0",
        }}
        bgColor={useColorModeValue("#2f2f2f09", "#ffffff09")}
        h="4em"
        alignItems={"center"}
        justify={"space-between"}
        px={10}
        w="full"
        zIndex={9999}
      >
        <Text>
          <Link to="/">Logo</Link>
        </Text>
        <Box>
          <Menu>
            <MenuButton mr={5}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Me</MenuItem>
              <MenuItem>Me</MenuItem>
              <Link to="/download">
                <MenuItem>Downloads</MenuItem>
              </Link>
              <Link to="/notfound">
                <MenuItem>NotFound</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Button
            as="button"
            onClick={() => {
              toggleColorMode()
            }}
          >
            {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Flex>
      <Box mt={"4.5em"}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
