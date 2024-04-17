import React, { Component } from 'react';

class ContactFilter extends Component {

    render() {

        const { handleContactFilter } = this.props;

        return(

            <div>
                <p>Find contacts by name</p>
                <input
                type="text"
                name="filter"
                pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
                title="Contact Filter"
                required
                onChange={handleContactFilter}
                placeholder="Add contact"
            />
            </div>
        )
    }
}

export default ContactFilter;