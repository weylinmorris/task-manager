import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import { editItem } from '../actions/tasks'
import { connect } from 'react-redux';

class EditTask extends Component {
    constructor(props) {
        super(props)
        this.editTask = this.editTask.bind(this)
    }

    editTask(task) {
        this.props.dispatch(editItem(task.id, task))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ToDoForm { ...this.props.item } onSubmit={this.editTask} buttonText="Edit" header="Edit This Task" />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        item: state.find(item => item.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditTask);