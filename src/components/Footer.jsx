import { Box, Container, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box py="5">
      <Container maxW="container.md">
        <Text color="gray.400" size="xs">
          Copyright © 2023 Dwiki Krisna, All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
