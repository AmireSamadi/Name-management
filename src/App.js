import React, { Component } from "react";
import Persons from "./components/person/persons";

class App extends Component {
  state = {
    persons: [],
    person: "",
    showPerson: true,
  };

  // method handel person
  handelPerson = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  //method Delete Person

  deletePerson = (id) => {
    let persons = [...this.state.persons];
    let personFilter = persons.filter((person) => person.id !== id);
    this.setState({ persons: personFilter });
  };
  // method change Name
  changeName = (event, id) => {
    let persons = [...this.state.persons];
    let personIndex = persons.findIndex((person) => person.id === id);
    let person = persons[personIndex];
    person.fullName = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons });
  };
  // creat new persons
  creatNewPerson = () => {
    let persons = [...this.state.persons];
    let person = {
      id: Math.floor(Math.random() * 1000),
      fullName: this.state.person,
    };
    if (person.fullName !== "" && person.fullName !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
    }
  };
  //method get persons
  getValuePerson = (event) => {
    this.setState({ person: event.target.value });
  };

  //method render
  render() {
    let { persons, showPerson } = this.state;

    // condition rendering
    let human = null;
    if (showPerson) {
      human = (
        <Persons
          persons={persons}
          deletePerson={this.deletePerson}
          changeName={this.changeName}
        />
      );
    }

    return (
      <div className="rtl text-center">
        <div className="alert alert-info">
          <h2>مدیریت کننده اشخاص</h2>
        </div>

        <h5 className="alert alert-light">
          تعداد اشخاص{" "}
          <span className="badge badge-pill badge-success">
            {persons.length}
          </span>{" "}
          نفر می باشد
        </h5>

        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <div class="input-group w-25 ">
              <input
                type="text"
                placeholder="اسم بهم بده"
                className="form-control "
                onChange={this.getValuePerson}
                value={this.state.person}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  className="btn btn-sm btn-success fa fa-plus-square"
                  onClick={this.creatNewPerson}
                />
              </div>
            </div>
          </form>
        </div>

        <button onClick={this.handelPerson} className="btn  btn-info ">
          نمایش اشخاص
        </button>

        {human}
      </div>
    );
  }
}

export default App;
