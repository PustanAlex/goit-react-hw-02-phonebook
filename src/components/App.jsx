import React, { Component } from 'react';
import Phonebook from "./Phonebook/Phonebook";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            name: '',
            number: '',
            filter: '',
        };
    }



    render() {
        return (
            <div className="main">
                <Phonebook addContact={this.addContact} />
            </div>
        );
    }
}

export default App;
