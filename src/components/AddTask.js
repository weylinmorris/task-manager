import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import { addItem } from '../actions/tasks'
import { connect } from 'react-redux';

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.addTask = this.addTask.bind(this)
    }

    addTask(task) {
        this.props.dispatch(addItem(task))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ToDoForm onSubmit={this.addTask} buttonText="Add" />
            </div>
        );
    }
}

export default connect()(AddTask);