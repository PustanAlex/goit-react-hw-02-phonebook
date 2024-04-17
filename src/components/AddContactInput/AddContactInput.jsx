import React, { Component } from 'react';

class AddContactInput extends Component {
    render() {
        const { name, handleInputChange } = this.props;
        return (
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleInputChange}
                placeholder="Add contact"
            />
        );
    }
}

export default AddContactInput;
