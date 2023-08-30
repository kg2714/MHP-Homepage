import {
  Box,
  Text,
  Stack,
  HStack,
  Center,
  Badge,
  Heading,
  Flex,
  Image,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"

const FeatureBox = ({
  featureName,
  featureDescription,
}: {
  featureName: string
  featureDescription: string
}) => {
  const shadow = useColorModeValue("0 0 20px #1d24544f", "0 0 20px #8888887f")
  return (
    <Box
      width={{
        base: "348px",
      }}
      height={"440px"}
      p={5}
      bgColor={useColorModeValue("gray.300", "gray.900")}
      borderRadius={"lg"}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadow
        e.currentTarget.style.scale = "1.03"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = ""
        e.currentTarget.style.scale = "1.0"
      }}
      transitionProperty={"all"}
      transitionDuration={"50ms"}
      transitionTimingFunction={"ease-in"}
    >
      <Center>
        <Flex direction={"column"} textAlign={"center"} alignItems={"center"}>
          <Image
            src="https://picsum.photos/500"
            height={"128px"}
            width={"128px"}
            mb={6}
            objectFit={"contain"}
          />
          <Heading>{featureName}</Heading>
          <Text>{featureDescription}</Text>
        </Flex>
      </Center>
    </Box>
  )
}

const Features = () => {
  return (
    <>
      <Text ml={10} my={8}>
        Features
      </Text>
      <Center>
        <Wrap spacing="3em" justify="center">
          <Center>
            <FeatureBox
              featureName="Fast, reliable"
              featureDescription="A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere."
            />
          </Center>
          <Center>
            <FeatureBox
              featureName="Fast, reliable"
              featureDescription="A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere."
            />
          </Center>
          <Center>
            <FeatureBox
              featureName="Fast, reliable"
              featureDescription="A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere."
            />
          </Center>
          <Center>
            <FeatureBox
              featureName="Fast, reliable"
              featureDescription="A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere.A pocket music player. Upload once, listen everywhere."
            />
          </Center>
        </Wrap>
      </Center>
    </>
  )
}

export default Features
