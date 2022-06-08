import React, { useEffect, useState } from "react";
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

const SortableList = () => {
  const [sort, setSort] = useState(null);
  const [desc, setDesc] = useState(false);

  const [data, setData] = useState(peopleData);

  const sortPeople = (property) => {
    // needs to handle 3 conditionals null, if prop is same, if prop is same + desc
    if (sort === property) {
      if (desc) {
        setSort(null);
        setData(peopleData);
      } else {
        // we want to desc sort + add desc prop.
        setDesc(true);
        const sortedPeople = [...peopleData].sort((a, b) =>
          b[property].localeCompare(a[property])
        );
        setData(sortedPeople);
      }
    } else {
      setSort(property);
      setDesc(false);
      const sortedPeople = [...peopleData].sort((a, b) =>
        a[property].localeCompare(b[property])
      );
      setData(sortedPeople);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <p>
        A list of all the users in your account including their name, title,
        email, and role.
      </p>

      <div className="grid grid-cols-4 bg-gray-400">
        <SortableColumn prop={"name"} sort={sort} onClick={sortPeople}>
          Name
        </SortableColumn>
        <SortableColumn prop={"title"} sort={sort} onClick={sortPeople}>
          Title
        </SortableColumn>
        <SortableColumn prop={"email"} sort={sort} onClick={sortPeople}>
          Email
        </SortableColumn>
        <SortableColumn prop={"role"} sort={sort} onClick={sortPeople}>
          Role
        </SortableColumn>
      </div>

      <List data={data} />
    </div>
  );
};

export default SortableList;

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
  return <div onClick={() => onClick(prop)}>{children}</div>;
};
