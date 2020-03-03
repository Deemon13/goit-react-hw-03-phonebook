// IMPORT
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// CSS-IN-JS
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
`;

const Label = styled.label`
  font-size: 1.8rem;
`;

const Input = styled.input`
  font-size: 1.8rem;
  width: 25rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  display: block;
  font-size: 1.8rem;
  margin: 0 auto;
  max-width: 20rem;
  padding: 1rem 5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  &:active {
    background-color: blue;
    color: snow;
    border-color: black;
    outline: none;
  }
`;
// REACT COMPONENT
export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func
  };

  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </Label>
        <Label>
          Phone:
          <Input
            type="text"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
