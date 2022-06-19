import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { faker } from "@faker-js/faker";

const firebaseConfig = process.env.FIREBASE_CONFIG;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCollectionRef = (name) => {
  return collection(db, name);
};

const collectionRef = getCollectionRef("Reminders");

export const getDocsHook = async (collectionRef) => {
  const response = await getDocs(collectionRef);
  const data = response.docs.map((doc) => {
    return {
      firebaseId: doc.id,
      ...doc.data(),
    };
  });

  return data;
};

export const deleteDocsHook = (collectionRef, id) => {
  // need doc id
  const docRef = doc(collectionRef, id);
  deleteDoc(docRef);
};

// this can work for creating a tab too
export const addDocHook = (data, collectionRef) => {
  // add an object, to the collection you select
  addDoc(data, collectionRef);
};

export const deleteTab = async (collectionRef, tabKey) => {
  // i think we can do a loop grab all ids from the tab and then delete
  // call the deletedocshooks with the id
  const data = await getDocsHook(collectionRef);

  // filter out the tabs we want to delete
  const filteredTabs = data.filter((doc) => doc.tab === tabKey);

  filteredTabs.forEach((reminder) => {
    deleteDocsHook(collectionRef, reminder.firebaseId);
  });
};

const addFakeData = (number, tab) => {
  if (number < 0) {
    return;
  }
  const newReminder = {
    tab: tab,
    reminder: faker.lorem.lines(1),
  };

  addDocHook(newReminder, collectionRef);

  addFakeData(number - 1, tab);
};

// addFakeData(4, "work");
