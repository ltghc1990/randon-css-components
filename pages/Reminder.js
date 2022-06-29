import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "../components/Todo/Sidebar/Sidebar";
import Main from "../components/Todo/Main/Main";

import { useBooleanHook } from "../components/Todo/useHooks";
import { useDisclosure } from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";

// chakra stuff

const Reminder = () => {
  const [toggleReminder, setToggleReminder] = useBooleanHook();

  // for sidebar open or close
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <Box className="h-screen py-20 overflow-y-auto bg-slate-200 w-fill">
      <Flex
        mx="auto"
        width="80%"
        maxW={1200}
        className="overflow-hidden bg-white rounded-md shadow-2xl"
      >
        <AnimatePresence exitBeforeEnter initial={false}>
          {isOpen && <Sidebar setToggleReminder={setToggleReminder} />}
        </AnimatePresence>
        <Main
          toggleReminder={toggleReminder}
          setToggleReminder={setToggleReminder}
          onToggle={onToggle}
        />
      </Flex>
    </Box>
  );
};

export default Reminder;
