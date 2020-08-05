import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../styles/task-list.css'

class ToDoList extends Component {
    render() {
        return (
            <div className="toDoList-container">
                <div className="toDoList-header">
                    <h1>To Do List</h1>
                    <Link className="toDoList-add-task" to="/create">{this.props.items.length == 0 ? 'Add your first task!' : 'Add a Task' }</Link>
                </div>
                {
                    this.props.items.map((task, index) => {
                        return (
                            <ToDoItem { ...task } key={index} />
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state
    }
}

export default connect(mapStateToProps)(ToDoList);