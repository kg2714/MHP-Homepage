import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  useColorModeValue,
  Button,
  Heading,
  Stack,
  Wrap,
  Link,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export default function Download() {
  const bgColor = useColorModeValue("#9a999e3e", "#2e2e2e8f");
  const In = styled.a`
    color: ${useColorModeValue("#0d731fff", "#14e3a87a")};
  `;

  return (
    <Center>
      <Flex direction={"column"} align={"center"}>
        <Heading m={12}>Downloads</Heading>
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          spacing={7}
        >
          <Box
            borderRadius={"10px"}
            bgColor={bgColor}
            p={10}
            width={{
              md: "30vw",
              base: "80vw",
            }}
          >
            <Heading>Windows 10, 11 64-bit</Heading>
            <Text my="24px">
              It is recommended that you need to install or update latest version
              of Microsoft Visual C++ and Microsoft .NET Framework.
            </Text>
            <Wrap spacing={"16px"} my={"24px"}>
              <Button>Download Installer</Button>
              <Button>Download ZIP Archive</Button>
            </Wrap>
          </Box>
          <Box
            borderRadius={"10px"}
            bgColor={bgColor}
            p={10}
            width={{
              md: "40vw",
              base: "80vw",
            }}
            height={{
              md: "510px",
              base: "auto",
            }}
          >
            <Heading>Linux</Heading>
            <Text mt={"24px"}>
              You can build it from{" "}
              <In href="https://github.com/kg2714/MHP-Homepage">source</In> or
              simply download the AppImage/Installer file provided below.
            </Text>
            <Wrap spacing={"16px"} my={"24px"}>
              <Button>Download AppImage</Button>
              <Button>Download .deb file</Button>
              <Button>Download .rpm file</Button>
              <Button>Download source files</Button>
            </Wrap>
            <Text>
              You can follow these <In>instructions</In> here.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Center>
  );
}
