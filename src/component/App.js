// IMPORT
import React, { Component } from "react";
// IMPORT COMPONENTS
import Layout from "./Layout/Layout";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
// UTILS
import { uuid } from "uuidv4";

// REACT COMPONENT-CLASS
export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name,
      number
    };

    const findContact = this.state.contacts.find(
      contact => contact.name === name
    );

    if (findContact) {
      alert(`${findContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    });
    console.log(contact);
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onAddContact={this.addContact}></ContactForm>
        </Section>
        <Section title="Contacts">
          {contacts.length > 2 && (
            <Filter value={filter} onChangeFilter={this.changeFilter}></Filter>
          )}
          {contacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            ></ContactList>
          )}
        </Section>
      </Layout>
    );
  }
}
