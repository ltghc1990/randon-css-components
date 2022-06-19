import { useQueryHook, useMutationHook } from "../useHooks";
import { deleteDocsHook } from "../firebase";

import BadgeComp from "./BadgeComp";

import { Flex, Text, Box } from "@chakra-ui/react";

const Reminders = () => {
  // data = all object reminders
  const { tabKey, data, filteredReminders } = useQueryHook();

  const { mutate } = useMutationHook(deleteDocsHook);

  const whatToShow = tabKey === "all" ? data : filteredReminders;

  if (!whatToShow) {
    return <div>Could not return reminders...</div>;
  }

  //   the first index is the only one that can be an emtpy tab
  if (!whatToShow[0].reminder) {
    return <div className="my-2">No reminders!</div>;
  }
  return (
    <div className="py-8">
      {whatToShow.map((reminder) => {
        if (reminder.reminder)
          return (
            <Flex
              justify="space-between"
              align="center"
              py={{ base: 2 }}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
              key={reminder.firebaseId}
            >
              <Text fontSize={{ base: "sm", md: "md" }} className="capitalize">
                {reminder.reminder}
                {tabKey === "all" && reminder.tab !== tabKey && (
                  <BadgeComp text={reminder.tab} />
                )}
              </Text>

              <Box
                color="gray.600"
                _hover={{ color: "gray.800" }}
                className="border-2 border-white "
                onClick={() => {
                  mutate(reminder.firebaseId);
                }}
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
