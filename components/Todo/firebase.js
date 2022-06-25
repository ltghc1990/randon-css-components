import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
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
export const addDocHook = (collectionRef, data) => {
  // add an object, to the collection you select\
  const newObject = { ...data, createdAt: serverTimestamp() };
  console.log(newObject);

  addDoc(collectionRef, newObject);
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
// need to sort or else everytime we add tabs its going to arrange in a random order.

export const getByRecent = async () => {
  const colRef = collection(db, "Reminders");

  const q = query(colRef, orderBy("createdAt"));

  const response = await getDocs(q);

  const data = response.docs.map((item) => {
    return {
      firebaseId: item.id,
      ...item.data(),
    };
  });

  return data;
};
