import { Box, Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box mx={"auto"} maxW="5xl" color={"gray.600"}>
      <Heading textAlign={"center"} my={"4"}>
        Carousel
      </Heading>
      <Text maxW="6xl" my={"4"} fontWeight="bold">
        Carousel using framer motion, As well as using the information from the
        previous render to determine how the current animation should happen
      </Text>
      <Text>
        We want the animation to come in from the left or right depending on if
        we are decrementing or incrementing. so in order to know if we are
        incrementing or decrementing we need information from the previous
        render. if we are incrementing, that&apos;ll mean the difference between
        the previous count and the current count is positive, and vise versa; it
        will be negative if we are decrementing
      </Text>
    </Box>
  );
};

export default Header;
