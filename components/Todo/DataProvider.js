import { useState, createContext } from "react";

import { useQuery } from "react-query";

import { getCollectionRef, getDocsHook, getByRecent } from "./firebase";

export const TodoContext = createContext();

const DataProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  // setServerData should only be used inside onSuccess, our mutations to the server data should cause it to run, rerendering our data
  const [serverData, setServerData] = useState({});

  const collectionRef = getCollectionRef("Reminders");

  const { data: allReminders, isError } = useQuery(
    "firebaseData",
    // () => getDocsHook(collectionRef),
    getByRecent,
    {
      // staleTime: Infinity,
      onSuccess: (reminders) => {
        const tabsSet = new Set(
          reminders?.map((reminder) => reminder.tab) ?? []
        );
        const tabs = [...tabsSet];
        const tabsLength = tabs.length;
        // this is data that we get from the server
        setServerData({ tabs, tabsLength });
      },
    }
  );
  // state and server state should be kept separate.
  // once we have the server data from on success, we are using local state to format and determine what to show.
  // tabIndex,tabKey, filtereReminders is really just ui local state. the tabs and the tabs length can only be determined thru the server state

  // since this is local state it needs to be out of the onsuccess which only rerenders if a mutation occurs. the onsuccess will fire off only when the serverside data changes and not when our local state changes.
  const tabKey = serverData?.tabs?.[tabIndex];
  // can also put the allreminders in the state, but its going to render if a mutation happens so this is fine too
  const filteredReminders = allReminders?.filter((item) => item.tab === tabKey);

  return (
    <TodoContext.Provider
      value={{
        ...serverData,
        tabIndex,
        tabKey,
        filteredReminders,
        allReminders,
        setTabIndex,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default DataProvider;
