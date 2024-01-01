import React from "react";
import { Box, Flex, Center, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} my={80} justifyContent={"center"}>
      <motion.div initial={{
        y: 200,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1,
        transitionDuration: "250ms",
        transitionTimingFunction: "ease-out"
      }}><Heading fontSize={64}>404 Not Found!</Heading></motion.div>
      <motion.div initial={{
        y: -400,
        opacity: 0,
      }} animate={{
        y: 0,
        opacity: 1,
        rotate: 360,
        transitionDuration: "150ms"
      }}>
        <Text>Looks like you're heading to our unavailable service.</Text>
      </motion.div>
    </Flex>
  );
};

export default NotFound;
