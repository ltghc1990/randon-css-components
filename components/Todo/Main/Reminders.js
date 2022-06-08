import React, { useContext } from "react";
import { TodoContext } from "../DataProvider";

import BadgeComp from "./BadgeComp";

import { Flex, Text, Box } from "@chakra-ui/react";

const Reminders = () => {
  const { tab, allReminders, reminders, deleteReminder } =
    useContext(TodoContext);

  const whatToShow = tab === "all" ? allReminders : reminders;

  if (!whatToShow) {
    return <div>Could not return reminders...</div>;
  }

  if (whatToShow.length === 0) {
    return <div className="my-2">No reminders!</div>;
  }
  return (
    <div className="py-8">
      {whatToShow.map((reminder) => {
        return (
          <Flex
            justify="space-between"
            align="center"
            py={{ base: 2 }}
            borderBottom="1px solid"
            borderBottomColor="gray.300"
            key={reminder.id}
          >
            <Text fontSize={{ base: "sm", md: "md" }} className="capitalize">
              {reminder.reminder}
              {tab === "all" && reminder.createdTab !== tab && (
                <BadgeComp text={reminder.createdTab} />
              )}
            </Text>

            <Box
              color="gray.600"
              _hover={{ color: "gray.800" }}
              className="border-2 border-white "
              onClick={() => deleteReminder(reminder.id)}
            >
              <DeleteIcon />
            </Box>
          </Flex>
        );
      })}
    </div>
  );
};

export default Reminders;

const DeleteIcon = () => {
  return (
    <div className="cursor-pointer ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
