import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem, toggleCompleted } from '../actions/tasks'
import moment from 'moment'
import { Link } from 'react-router-dom';
import styles from '../styles/task.css'

class ToDoItem extends Component {
    render() {
        return (
            <div className="toDoItem-container">
                <button
                    onClick={ () => { this.props.dispatch(toggleCompleted(this.props.id)) } }
                    className={ this.props.completed ? 'toDoItem-completed toDoItem-completed-button' : 'toDoItem-not-completed toDoItem-completed-button' }
                ><span>{ this.props.completed ? '✓' : '' }</span></button>
                <div>
                    <h3>{this.props.title}</h3>
                    <p
                        className={ 
                            moment(this.props.dueDate).isSame(moment(), 'day') ? 'toDoItem-date-same-day' : moment(this.props.dueDate).isBefore(moment(), 'day') ? 'toDoItem-date-previous-day' : 'toDoItem-date' 
                        }
                    >{moment(this.props.dueDate).format('MMMM Do')}</p>
                </div>
                <p className="toDoItem-note">{this.props.notes}</p>
                <Link className="toDoItem-edit" to={`/edit/${this.props.id}`}>Edit</Link>
                <button className="toDoItem-delete" onClick={() => { this.props.dispatch(removeItem(this.props.id)) }}>Delete</button>
            </div>
        );
    }
}

export default connect()(ToDoItem);