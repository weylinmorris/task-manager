import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import 'react-dates/lib/css/_datepicker.css'

class ToDoForm extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
        this.onFocusChange = this.onFocusChange.bind(this)
        this.state = {
            dueDate: props.dueDate ? moment(props.dueDate) : moment(),
            title: props.title ? props.title : '',
            formError: '',
            calendarFocused: false
        }
    }

    onDateChange(dueDate) {
        if (dueDate) this.setState(() => ({ dueDate }))
    }

    onFocusChange ({ focused }) {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit(e) {
        e.preventDefault()
        if (!this.state.title) {
            this.setState(() => ({ formError: 'Please add a title for this task!' }))
        } else {
            this.props.onSubmit({
                id: this.props.id,
                createDate: this.props.createDate ? this.props.createDate : moment().format('x'),
                dueDate: this.state.dueDate,
                title: this.state.title,
                completed: false
            })
        }
    }

    render() {
        return (
            <div>
                { this.state.formError && <p>{ this.state.formError }</p> }
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="due-date">Due Date</label>
                    <SingleDatePicker
                        date={ this.state.dueDate }
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => false }
                    />
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title"
                        value={this.state.title}
                        onChange={(e) => {
                            let title = e.target.value
                            this.setState(() => ({ title }))
                        }}
                    />
                    <button>{this.props.buttonText}</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;