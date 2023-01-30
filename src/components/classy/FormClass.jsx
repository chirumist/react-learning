import React, { Component } from "react";

export default class FormClass extends Component {
  constructor(props) {
    super(props);
    console.log("Form Class Constructor");
  }
  componentDidMount() {
    console.log("Form Class component mount");
  }
  componentDidUpdate() {
    console.log("Form Class component update");
  }
  componentWillUnmount() {
    console.log("Form Class component unmount");
  }
  render() {
    return <div>Form</div>;
  }
}
