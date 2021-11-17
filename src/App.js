import React, { Component } from "react";
import { Alert, Badge, Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";

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

  deletePerson = (id, fullName) => {
    let persons = [...this.state.persons];
    let personFilter = persons.filter((person) => person.id !== id);
    this.setState({ persons: personFilter });
    toast.error(`${fullName}${" "}با موفقیت حذف شد `, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      toast.success(`${person.fullName}${" "}با موفقیت اضافه شد `, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    //badgeStyle
    let badgeStyle = [];
    if (persons.length >= 3) badgeStyle.push("success");
    if (persons.length === 2) badgeStyle.push("warning");
    if (persons.length <= 1) badgeStyle.push("danger");
    return (
      <div className="rtl text-center">
        <Alert variant="info">
          <h2>مدیریت کننده اشخاص</h2>
        </Alert>

        <Alert variant="light">
          <h5>
            تعداد اشخاص{" "}
            <Badge pill bg={badgeStyle} text="light">
              {persons.length}
            </Badge>{" "}
            نفر می باشد
          </h5>
        </Alert>

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
                <Button
                  type="submit"
                  variant="success"
                  size="sm"
                  className="  fa fa-plus-square"
                  onClick={this.creatNewPerson}
                />
              </div>
            </div>
          </form>
        </div>

        <Button
          onClick={this.handelPerson}
          variant={showPerson ? "info" : "danger "}
        >
          نمایش اشخاص
        </Button>

        {human}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          rtl
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
