import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { faker } from "@faker-js/faker";

faker.seed(100);

const people = faker.datatype.array(20);
// creates a array of random strings/numbers

const peopleData = people.map(() => {
  // we can map over and return whatever
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const name = `${firstName} ${lastName}`;
  const email = faker.internet.email(firstName, lastName).toLowerCase();

  return {
    name,
    title: faker.name.jobTitle(),
    email,
    role: faker.name.jobType(),
  };
});

const SortableUrl = () => {
  // devrive values from the url
  const router = useRouter();
  const { query } = router;
  const [sortProp, desc] = query.sort?.split(":") ?? [];
  console.log(sortProp, desc);

  // const [data, setData] = useState(peopleData);

  const getData = () => {
    if (!sortProp) {
      return peopleData;
    }

    // can just use the desc prop to decide if ascending or descending
    if (desc) {
      return [...peopleData].sort((a, b) =>
        b[sortProp].localeCompare(a[sortProp])
      );
    } else {
      return [...peopleData].sort((a, b) =>
        a[sortProp].localeCompare(b[sortProp])
      );
    }
  };
  const data = getData();

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <p>
        A list of all the users in your account including their name, title,
        email, and role.
      </p>

      <div className="grid grid-cols-4 bg-gray-400">
        <SortableColumn prop={"name"}>Name</SortableColumn>
        <SortableColumn prop={"title"}>Title</SortableColumn>
        <SortableColumn prop={"email"}>Email</SortableColumn>
        <SortableColumn prop={"role"}>Role</SortableColumn>
      </div>

      <List data={data} />
    </div>
  );
};

export default SortableUrl;

const List = ({ data }) => {
  return (
    <ul className="">
      {data.map((people) => {
        return (
          <div key={people.name} className="grid grid-cols-4">
            <p>{people.name}</p>
            <p>{people.title}</p>
            <p>{people.email}</p>
            <p>{people.role}</p>
          </div>
        );
      })}
    </ul>
  );
};

const SortableColumn = ({ children, onClick, prop }) => {
  // parse the sort?
  const { query } = useRouter();
  const [sortProp, desc] = query.sort?.split(":") ?? [];
  console.log(sortProp, desc);

  let newSort = null;

  if (sortProp !== prop) {
    newSort = prop;
  } else if (sortProp == prop && !desc) {
    newSort = `${prop}:desc`;
  }

  return (
    <Link
      href={newSort ? `SortableUrl/?sort=${newSort}` : "SortableUrl/"}
      onClick={() => onClick(prop)}
    >
      {children}
    </Link>
  );
};

// there has to be a way to append our querys instead of the fore overwrite
