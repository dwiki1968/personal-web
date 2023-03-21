import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Flex flexDir="column" minH="100vh">
        <Navbar mb={10} />
        <Container maxWidth="container.md" flex="1">
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
