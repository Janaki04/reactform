import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contact: null,
      users: [],
    };
  }
  manageChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  manageSubmission = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      contact: this.state.contact,
    };
    const tempArr = this.state.users;
    tempArr.push(obj);
    this.setState({ users: tempArr });
  };
  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.manageChange(e)}
          />

          <label>Contact</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={this.state.contact}
            onChange={(e) => this.manageChange(e)}
          />

          <input type="submit" onClick={(e) => this.manageSubmission(e)} />
        </form>

        {this.state.users.map((user) => (
          <p>
            Name:{user.name} Contact:{user.contact}
          </p>
        ))}
      </>
    );
  }
}

export default Form;
