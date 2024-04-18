import React, { Component } from 'react';
import Phonebook from "./Phonebook/Phonebook";


class App extends Component {

    render() {
        return (
            <div className="main">
                <Phonebook />
            </div>
        );
    }
}

export default App;
