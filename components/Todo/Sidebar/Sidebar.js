// next stuff
import Link from "next/link";
import { useTabHook } from "../useHooks";
import { TodoContext } from "../DataProvider";
import React, { useContext } from "react";
import AddListForm from "./AddListForm";

// chakra stuff
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Sidebar = ({ setToggleReminder }) => {
  const { tab: tabName, tabs } = useContext(TodoContext);

  const selectedStyle = "bg-gray-600 text-gray-100";

  const [showInput, setShowInput] = useTabHook();

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, width: 0 }}
      animate={{
        opacity: 1,
        width: "25%",
        transition: { type: "tween", duration: 0.2 },
      }}
      exit={{ opacity: 1, width: 0, transition: { duration: 0.2 } }}
      maxW={300}
      overflow="hidden"
      backgroundColor={"gray.700"}
      color="gray.400"
      pt="12"
      pb="4"
    >
      <Flex flexDirection="column" flexWrap="wrap">
        {tabs.map((tab, index) => {
          return (
            <Link href={`/Reminder/?tab=${index}`} key={index}>
              <a
                onClick={setToggleReminder.off}
                className={`${
                  tabName == tab && selectedStyle
                } py-2 pl-6 capitalize hover:text-gray-100`}
              >
                {tab}
              </a>
            </Link>
          );
        })}
      </Flex>
      {showInput && <AddListForm setShowInput={setShowInput} />}

      <Box
        as="span"
        role="group"
        className="inline-block mt-4 ml-6 hover:cursor-pointer hover:fill-slate-200"
        onClick={setShowInput.toggle}
      >
        <AddNewList />
      </Box>
    </Box>
  );
};

export default Sidebar;

const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const AddNewList = () => {
  return (
    <Flex align="center" _groupHover={{ color: "white" }} color="gray.400">
      <AddIcon />
      <Text
        as="span"
        fontSize={{ base: "xs", md: "sm", lg: "md" }}
        ml={{ base: 2, md: 3 }}
      >
        Add List
      </Text>
    </Flex>
  );
};
