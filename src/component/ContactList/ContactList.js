// IMPORT
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// CSS-IN-JS

const List = styled.ul`
  max-width: 50rem;
`;

const ListItem = styled.li`
  display: flex;
  align-self: center;
  justify-content: space-between;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-bottom: none;
  }
`;

const Button = styled.button`
  display: inline-block;
  right: 0;
  padding: 0.2rem 2rem;
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
const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </ListItem>
    ))}
  </List>
);
// PROP-TYPES
ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ),
    PropTypes.array
  ])
};
// EXPORT
export default ContactList;
