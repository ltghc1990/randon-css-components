import React, { useEffect, useRef, useState, useContext } from "react";

import { TodoContext } from "../DataProvider";

import { useMutationHook } from "../useHooks";
import { addDocHook } from "../firebase";

import { Input, Flex } from "@chakra-ui/react";
// form stuff
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

const AddListForm = ({ setShowInput }) => {
  const { setTabIndex, tabsLength } = useContext(TodoContext);
  const { mutate } = useMutationHook(addDocHook);

  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  const isError = inputValue === "";

  useEffect(() => {
    inputRef.current.focus();
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!isError) {
      mutate({ tab: inputValue });
      setTabIndex(tabsLength);
      setInputValue("");
      setShowInput.off();
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl isInvalid={isError}>
        <Flex align={"center"}>
          <Input
            ref={inputRef}
            placeholder="Add New List..."
            size="md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            pl="6"
          />
          <button
            as="div"
            className="absolute z-50 text-gray-600 right-2 hover:text-blue-500"
          >
            <Check />
          </button>
        </Flex>
        {isError && (
          <FormErrorMessage pl="6">Cant be left emtpy</FormErrorMessage>
        )}
      </FormControl>
    </form>
  );
};

export default AddListForm;

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
