import { useBoolean } from "@chakra-ui/react";

// this needs to be passed so many times, I feel like it should be in a context

const useReminderHook = () => {
  const [hook, setHook] = useBoolean();

  return [hook, setHook];
};

//  shows/hides the tab input in the sidebar
const useTabHook = () => {
  const [hook, setHook] = useBoolean();

  return [hook, setHook];
};

// to toggle sidebar
const useToggleSidebar = () => {
  const [hook, setHook] = useBoolean();

  return [hook, setHook];
};

export { useReminderHook, useTabHook, useBooleanHook };

// can just be 1 function
const useBooleanHook = (boolean) => {
  const [hook, setHook] = useBoolean(boolean);

  return [hook, setHook];
};

// the function invoked will return a separate instance, so creating separate functions of the samething isnt nessasary
// the only way dublicate hooks is useful is when we want to search where in our app we use the variable function

// dont even need to create this since its an import from chakra
