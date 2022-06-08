import { Badge, Text } from "@chakra-ui/react";

const BadgeComp = ({ text }) => {
  return (
    <Badge
      as="span"
      color="gray.500"
      px={2}
      ml={2}
      borderRadius="md"
      mb={1}
      textTransform="capitalize"
      fontWeight="semibold"
    >
      {text}
    </Badge>
  );
};

export default BadgeComp;
