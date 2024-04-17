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
            name: '',
            contacts: [],
            number: '',
            filter: ''
        };
    }




    handleAddContact = () => {
        const { name, number } = this.state;
        if (name.trim() !== '' && number.trim() !== '') {
            const newContact = {
                id: nanoid(),
                contactName: name,
                phoneNumber: number,
            };
            this.addContact(newContact);
            this.setState({ name: '', number:'' }); 
        }
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleNumberChange = (e) => {
        this.setState({ number: e.target.value });
    };


    addContact = (newContact) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact]
        }));
    };

    render() {

        const {name, contacts, number} = this.state
   
        
        return (
            <div className={style.phonebook}>  
                <div className={style.addToContact}>
                    <h2>Name</h2>
                    <AddContactInput name={name} handleInputChange={this.handleNameChange}/>
                    <AddNumberInput number={number}  handleNumberChange={this.handleNumberChange}/>
                        <button onClick={this.handleAddContact}>Add Contact</button>
                </div>

                <div>
                    <Contacts contacts={contacts} number={number}/>
                </div>
          
            </div>
        );
    }
}

export default Phonebook;