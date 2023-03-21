import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BlogPostCard = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Heading>Minim qui pariatur est laboris deserunt</Heading>
      <Text size="sm" color="gray.500">
        December 12, 2022
      </Text>
      <Flex flexWrap="wrap" gap={2} mt={2}>
        <Button size="xs">Web Development</Button>
        <Button size="xs">React JS</Button>
      </Flex>
      <Text mt={2}>
        Culpa laboris exercitation nostrud duis ex mollit quis consequat veniam
        elit.
      </Text>
      <Button colorScheme="blue" my={4} size="sm" variant="link">
        Read More
      </Button>
      <Divider />
    </Box>
  );
};
export default BlogPostCard;
