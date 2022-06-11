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

export const deleteDocsHook = (id, collectionRef) => {
  // need doc id
  const docRef = doc(collectionRef, id);
  deleteDoc(docRef);
};

export const addDocHook = (data, collectionRef) => {
  // add an object, to the collection you select
  addDoc(collectionRef, data);
};

export const deleteTab = async (tab, collectionRef, stateData) => {
  // i think we can do a loop grab all ids from the tab and then delete
  // call the deletedocshooks with the id
  const data = await getDocsHook(collectionRef);
  console.log(data);
  // filter out the tab
  const filteredTabs = data.filter((doc) => doc.tab === tab);
  console.log(filteredTabs);
  filteredTabs.forEach((reminder) => {
    deleteDocsHook(reminder.firebaseId, collectionRef);
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
