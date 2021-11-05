import React from "react";
// import "./person.css";
const Person = ({ fullName, deleted, changeName }) => {
  return (
    <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
      <div className="card-body">
        <p className="card-title">{`${fullName}`}</p>
        <div className="input-group justify-content-center">
          <input
            type="text"
            className="form-control w-50 border-0"
            placeholder={`${fullName}`}
            onChange={changeName}
          />
          <div className="input-group-prepend">
            <button
              onClick={deleted}
              className="btn btn-danger btn-sm border-0  fa fa-trash"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
