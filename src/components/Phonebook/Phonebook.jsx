
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from "../Contacts/Contacts";
import style from './Phonebook.module.css'
import AddContactInput from 'components/AddContactInput/AddContactInput';
import AddNumberInput from 'components/AddNumberInput/AddNumberInput';

class Phonebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem('nameChange') || '',
            contacts: JSON.parse(localStorage.getItem('contacts')) || [],
            number: localStorage.getItem('numberChange') || '',
            filter: ''
        };
    }

    handleAddContact = () => {
        const { name, number, contacts } = this.state;
        if (name.trim() !== '' && number.trim() !== '') {
            const existingContact = contacts.find(contact => contact.contactName === name || contact.phoneNumber === number);
            if (existingContact) {
                alert('You already added this contact!');
            } else {
                const newContact = {
                    id: nanoid(),
                    contactName: name,
                    phoneNumber: number,
                };
                this.addContact(newContact);
            }
            this.setState({ name: '', number: '' });
        }
    };

    handleDeleteContact = (id) => {
        const {contacts} = this.state
        const updatedContactList = contacts.filter(contact => contact.id !== id)
        this.setState({contacts: updatedContactList})
        localStorage.setItem('contacts', JSON.stringify(updatedContactList));
    };

    handleNameChange = (e) => {
      
        this.setState({ name: e.target.value });
        localStorage.setItem('nameChange', e.target.value)
    };

    handleNumberChange = (e) => {
        this.setState({ number: e.target.value });
        localStorage.setItem('numberChange', e.target.value)
    };

    handleContactFilter = (e) => {
        this.setState({ filter: e.target.value });
    }

    addContact = (newContact) => {
        const { contacts } = this.state;
        const updatedContacts = [...contacts, newContact];
        this.setState({ contacts: updatedContacts });
        
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        localStorage.setItem('nameChange', '');
        localStorage.setItem('numberChange', '');
    };

    render() {
        const { name, contacts, number, filter } = this.state;

        return (
            <div className={style.phonebook}>  
                <div className={style.addToContact}>
                    <h2>Name</h2>
                    <AddContactInput name={name} handleInputChange={this.handleNameChange}/>
                    <AddNumberInput number={number}  handleNumberChange={this.handleNumberChange}/>
                    <button onClick={this.handleAddContact}>Add Contact</button>
                </div>

                <div>
                    <Contacts contacts={contacts} number={number} filter={filter} handleDeleteContact={this.handleDeleteContact} handleContactFilter={this.handleContactFilter}/>
                </div>
          
            </div>
        );
    }
}

export default Phonebook;
