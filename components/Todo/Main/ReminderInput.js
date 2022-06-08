import React, { useContext, useState, useEffect, useRef } from "react";
import { TodoContext } from "../DataProvider";

import { Input, Flex } from "@chakra-ui/react";

const ReminderInput = ({ setToggleReminder }) => {
  const { createReminder, tab } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue) {
      createReminder(tab, inputValue);
      setInputValue("");
      setToggleReminder.off();
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Flex
      as="form"
      justify="space-between"
      align="center"
      position="relative"
      onSubmit={onSubmitHandler}
    >
      <Input
        ref={inputRef}
        px={0}
        placeholder="New reminder..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="absolute right-0 z-50 cursor-pointer ">
        <Check />
      </button>
    </Flex>
  );
};

export default ReminderInput;

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
};
