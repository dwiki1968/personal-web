import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const Navbar = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Container maxWidth="container.md">
        <Flex py={5} alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as={Link} size="md" href="/">
              Dwiki Krisna's Blog
            </Heading>
          </Box>
          <Menu direction="rtl">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Log In</MenuItem>
              <MenuItem>Dark Mode</MenuItem>
              <MenuItem>My Profile</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
