import { useBoolean } from "@chakra-ui/react";
import { getCollectionRef, getDocsHook } from "./firebase";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";

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

export { useReminderHook, useTabHook, useBooleanHook };

// can just be 1 function
const useBooleanHook = (boolean) => {
  const [hook, setHook] = useBoolean(boolean);

  return [hook, setHook];
};

// the function invoked will return a separate instance, so creating separate functions of the samething isnt nessasary
// the only way dublicate hooks is useful is when we want to search where in our app we use the variable function

// dont even need to create this since its an import from chakra

// variable name should be more specific since we can have multiple useQueryHooks for different things
// export const useQueryHook = () => {
//   const router = useRouter();
//   // need to router for the tab index
//   const { query } = router;

//   const collectionRef = getCollectionRef("Reminders");

//   const { data, isLoading } = useQuery(["firebaseData"], () =>
//     getDocsHook(collectionRef)
//   );

//   // i want to parse the data here
//   // use guards on the array functions to prevent errors

//   const tabSet = new Set(data?.map((item) => item.tab));
//   const tabs = [...tabSet];
//   const tabsLength = tabs.length;
//   const tabIndex = query.tab ? query.tab : 0;
//   const tabKey = tabs[tabIndex];
//   // filter the reminders by tab
//   const filteredReminders = data?.filter((item) => item.tab === tabKey);

//   return { tabs, tabsLength, tabIndex, data, tabKey, filteredReminders };
// };

export const reduceData = (reminders) => {
  const tabsSet = new Set(reminders?.map((reminder) => reminder.tab) ?? []);
  const tabs = [...tabsSet];
  const tabsLength = tabs.length;
  // current tab value should come from the router
  const tabIndex = query.tab ? querytab : 0;
  const tabKey = tabs[tabIndex];

  return { tabs, tabsLength, tabIndex, tabKey, reminders };
};

export const useReduceDataQuery = () => {
  const router = useRouter();
  const { query } = router;
  return useQuery(["firebaseData", query.tab ? query.tab : 0], () =>
    reduceData()
  );
};

export const useRouterHook = () => {
  const router = useRouter();
  const { query } = router;

  const pushLink = (key, value) => {
    return {
      pathname: router.pathname,
      query: {
        ...query,
        [key]: value,
      },
    };
  };

  return { query, router, pushLink };
};
// to make the use mutation hook more reusuable we can pass in the function we want to perform ie add or delete, as a param

// the issue is that we would have to make an additional import on that compoenent ie bringing in the add or delete function from firebase

export const useMutationHook = (callBack) => {
  const collectionRef = getCollectionRef("Reminders");
  const queryClient = useQueryClient();

  const { data, mutate } = useMutation(
    "firebaseData",
    (value) => callBack(collectionRef, value),
    {
      onSuccess: () => {
        console.log("muatation successful");
        queryClient.invalidateQueries(["firebaseData"]);
      },
    }
  );

  return { data, mutate };
};

// i think we should make  unique query keys by using the url
