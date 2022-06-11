import react, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { faker } from "@faker-js/faker";
// query param from router determines our current tab.
// we also set the current tab after we add or delete the tabs
import { useQuery } from "react-query";

import { getCollectionRef, getDocsHook } from "./firebase";

export const TodoContext = createContext();

const DataProvider = ({ children }) => {
  const router = useRouter();
  const { query } = router;

  const collectionRef = getCollectionRef("Reminders");

  const { data: reminders, isError } = useQuery("reminders", () =>
    getDocsHook(collectionRef)
  );
  // derive values from the data

  // use a set for the tabs?
  const tabsSet = new Set(reminders?.map((reminder) => reminder.tab) ?? []);
  const tabs = [...tabsSet];
  const tabsLength = tabs.length;
  // current tab value should come from the router
  const tab = query.tab ? query.tab : 0;

  // can make the reactquery hooks on one page that we can call to make it easier to follow.

  // i think i can also do a onSuccess and set abunch of querys for the data that we dereive from the initialQuery.
  // something like {enabled: }

  //tabs, tabsLength, tab)

  return (
    <TodoContext.Provider
      value={{
        // createTab,
        // deleteTab,
        // createReminder,
        // deleteReminder,
        tab,
        tabs,
        tabsLength,
        reminders,
        // allReminders,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default DataProvider;

// tabslength needed to select the tab after it is created
// tab is need for the main header to display current tab property

// ---------------------------------------------------------------------------
