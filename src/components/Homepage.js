import React, { Component } from 'react';
import ToDoList from './ToDoList';

class Homepage extends Component {
    render() {
        return (
            <div>
                <ToDoList />
            </div>
        );
    }
}

export default Homepage;