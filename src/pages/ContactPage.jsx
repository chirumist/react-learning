import React, { Component } from "react";
import FormClass from "../components/classy/FormClass";
export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    console.log("Contact Constructor");
  }
  componentDidMount() {
    console.log("Contact component mount");
  }
  componentDidUpdate() {
    console.log("Contact component update");
  }
  componentWillUnmount() {
    console.log("Contact component unmount");
  }
  render() {
    return (
      <>
        <h1 className="text-2xl">ContactPage</h1>
        <FormClass></FormClass>
      </>
    );
  }
}
