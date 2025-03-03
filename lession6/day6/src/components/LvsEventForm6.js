import React, { Component } from "react";

export default class LvsEventForm6 extends Component {
  constructor(props) {
    super(props);
    this.studentName = React.createRef();
    this.studentAge = React.createRef();
    this.studentCourse = React.createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thông Tin Sinh Viên Khi Submit:\nName: ${this.studentName.current.value}\nAge: ${this.studentAge.current.value}\nCourse: ${this.studentCourse.current.value}`
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input type="text" ref={this.studentName} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Age:
          <input type="text" ref={this.studentAge} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Course:
          <select
            defaultValue="css"
            ref={this.studentCourse}
            style={styles.select}
          >
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="js">Js</option>
            <option value="reactjs">ReactJS</option>
          </select>
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    width: "300px",
    margin: "0 auto",
  },
  label: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  input: {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  select: {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};
