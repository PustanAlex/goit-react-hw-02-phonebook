// Contacts.js
import React, { Component } from 'react';
import style from './Contacts.module.css';
import ContactFilter from '../ContactFilter/ContactFilter';

class Contacts extends Component {
    formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 4)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 4)}) ${phoneNumber.slice(3, 6)} - ${phoneNumber.slice(6, 9)}`;
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.props;
        if (!filter) {
            return contacts;
        } else {
            const filteredByName = contacts.filter(contact =>
                contact.contactName.toLowerCase().includes(filter.toLowerCase())
            );
            const filteredByNumber = contacts.filter(contact =>
                contact.phoneNumber.includes(filter)
            );
            const filteredContacts = [...filteredByName, ...filteredByNumber];
            return filteredContacts;
        }
    };

    render() {
        const { handleDeleteContact } = this.props;
        const filteredContacts = this.getFilteredContacts();

        return (
            <div className={style.contacts}>
                <h2>Contacts</h2>
                <ContactFilter handleContactFilter={this.props.handleContactFilter}/>
                <ul className={style.contacts}>
                    {filteredContacts.map(contact => (
                        <li key={contact.id}>
                            {contact.contactName}: {this.formatPhoneNumber(contact.phoneNumber)}<button onClick={() => handleDeleteContact(contact.id)}>Delete Contact</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Contacts;
