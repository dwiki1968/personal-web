import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const TagButton = ({ ...rest }) => {
  const tags = [
    "Web Development",
    "Front End",
    "Back End",
    "CSS Trick",
    "UI/UX",
    "Databases",
    "React JS",
    "Express JS",
    "HTML",
  ];
  return (
    <Box {...rest}>
      <Flex flexWrap="wrap" rowGap={2} columnGap={5}>
        {tags.map((tag) => (
          <Button
            key={tag}
            colorScheme="blackAlpha"
            bgColor="blackAlpha.900"
            size="sm"
          >
            {tag}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default TagButton;
