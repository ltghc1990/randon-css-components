import { useContext } from "react";
import { TodoContext } from "../DataProvider";

import { Heading, Flex, Box } from "@chakra-ui/react";

const MainHeader = ({ setToggleReminder }) => {
  const { tabKey } = useContext(TodoContext);

  let tabName = tabKey === "all" ? "Reminders" : tabKey;

  return (
    <Flex justify={"space-between"} align="center" my={{ base: 3, md: 4 }}>
      <Heading className="text-gray-700 capitalize">{tabName}</Heading>
      <Box
        color="gray.600"
        border={"2px"}
        borderColor="white"
        borderRadius="base"
        _hover={{
          borderColor: "gray.400",
          color: "gray.800",
          cursor: "pointer",
          scale: 1.2,
        }}
        onClick={setToggleReminder.toggle}
      >
        <PlusIcon />
      </Box>
    </Flex>
  );
};

export default MainHeader;

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};
