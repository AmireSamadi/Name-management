import React from "react";
import Person from "./person";

const Persons = ({ persons, deletePerson, changeName }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullName={person.fullName}
          deleted={() => deletePerson(person.id)}
          changeName={(event) => changeName(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
