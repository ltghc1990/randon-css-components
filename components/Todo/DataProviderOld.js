import react, { useState, createContext } from "react";
import { useRouter } from "next/router";
import { faker } from "@faker-js/faker";
// query param from router determines our current tab.
// we also set the current tab after we add or delete the tabs

import { getCollectionRef } from "./firebase";

export const TodoContext = createContext();

const createTime = () => new Date().getTime();

const { database } = faker;
const mockData = {
  all: [
    {
      id: database.mongodbObjectId(),
      reminder: "Im in the all tab!",
      createTime: createTime(),
    },
  ],
  home: [
    {
      id: database.mongodbObjectId(),
      reminder: "walk the dog",
      createTime: createTime(),
    },
    {
      id: database.mongodbObjectId(),
      reminder: "Do homework",
      createTime: createTime(),
    },
  ],
  work: [
    {
      id: database.mongodbObjectId(),
      reminder: "work related stuff...",
      createTime: createTime(),
    },
  ],
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState(mockData);

  // the probem is thast object.keys will sort the objects from numbers first to letters....

  const tabs = Object.keys(data);
  const tabsLength = tabs.length;

  // use the url to return the current tab reminders
  const router = useRouter();
  const index = router.query.tab;
  const tab = tabs[index];
  const reminders = data[tab];

  const createTab = (name) => {
    const updatedData = { ...data, [name]: [] };
    setData(updatedData);
    router.push(`/Reminder/?tab=${tabsLength}`);
  };

  // i dont think i need the tab param since it resides inside of this component lol
  const createReminder = (tab, reminder) => {
    const newReminder = {
      id: database.mongodbObjectId(),
      reminder: reminder,
      createTime: new Date().getTime(),
    };
    const sliceTab = [...data[tab], newReminder];
    const updatedData = { ...data, [tab]: sliceTab };
    setData(updatedData);
  };

  const deleteTab = () => {
    // returns an array of [key, value] pairs
    // the idea is to turn the object in object into an array to perform an array method and then to change it back into an object in object
    const arrayOfKeys = Object.entries(data);
    const newArray = arrayOfKeys.filter((entry) => {
      // entry[0] returns the key. if the key does not match the current tab, we return the entry, effectivly removing the key along with its values
      if (entry[0] !== tab || entry[0] === "all") {
        return entry;
      }
    });
    // we then turn it back to an object in an object
    const backToObject = Object.fromEntries(newArray);
    setData(backToObject);
    router.push(`/Reminder/?tab=${0}`);
  };

  const deleteReminder = (id) => {
    // need a special use case for the all tab because that returns all the reminders ;
    // with the other tabs we already know which tab its in
    if (tab === "all") {
      // filter array and select obj we want to delete
      const selectObj = allReminders.filter(
        (reminder) => reminder.id === id
      )[0];
      const key = selectObj.createdTab;
      // find the tab that it belongs to in our data
      const selectedTab = data[selectObj.createdTab];
      // deletion
      const updatedArray = selectedTab.filter((reminder) => reminder.id !== id);
      setData({ ...data, [key]: updatedArray });
    } else {
      // since tab is avaiable here we dont need to pass it in
      const newReminders = reminders.filter((reminder) => reminder.id !== id);
      const updatedData = { ...data, [tab]: newReminders };
      setData(updatedData);
    }
  };

  const allReminders = (() => {
    let newArray = [];
    const All = Object.entries(data);
    const formatArray = All.forEach((entry) => {
      const key = entry[0];
      const reminders = entry[1];
      // reminders = an array of objects
      reminders.forEach((reminder) => {
        newArray.push({
          ...reminder,
          createdTab: key,
        });
      });
    });
    // need to sort list by createTime because the array returned is sorted by the tabs; if we add an reminder, it'll show up at the end of whichever tab its in
    const sortedArray = [...newArray].sort(
      (a, z) => a.createTime - z.createTime
    );
    return sortedArray;
  })();

  // console.log(Object.entries(data));

  return (
    <TodoContext.Provider
      value={{
        createTab,
        deleteTab,
        createReminder,
        deleteReminder,
        tab,
        tabs,
        tabsLength,
        reminders,
        allReminders,
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
