import React from 'react';
import { v4 as uuid } from 'uuid';
import { useChangeHandler, useValidation } from '../../hooks';

import classes from './Form.module.css';

import TextField from '../TextField';

const Form = function (props) {
    const { className, getTask } = props;
    const { value: taskName, onChange: onChangeTaskName, clear: taskNameInputClear } = useChangeHandler();
    const { value: user, onChange: onChangeUser, clear: userInputClear } = useChangeHandler();
    const { value: description, onChange: onChangeDescription, clear: descriptionInputClear } = useChangeHandler();

    const { alert: taskNameAlert, displayMessage: setTaskNameAlert } = useValidation();
    const { alert: userAlert, displayMessage: setUserAlert } = useValidation();
    const { alert: descriptionAlert, displayMessage: setDescriptionAlert } = useValidation();

    const displayAlert = (setStateFn, message) => {
        setStateFn(message);
    };

    const formValidation = () => {
        const rules = [
            {
                name: taskName,
                minLength: 3,
                message: 'Task name must be min. 3 characters long',
                setStateFn: setTaskNameAlert,
            },
            {
                name: user,
                minLength: 3,
                message: 'Your name must be min. 3 characters long',
                setStateFn: setUserAlert,
            },
            {
                name: description,
                minLength: 5,
                message: 'Description must be min. 5 characters long',
                setStateFn: setDescriptionAlert,
            },
        ];

        rules.forEach((rule) => {
            const { name, minLength, setStateFn, message } = rule;
            if (name.length < minLength) {
                displayAlert(setStateFn, message);
            } else displayAlert(setStateFn, '');
        });
    };

    const addTask = (e) => {
        e.preventDefault();

        formValidation();

        if (taskName.length >= 3 && user.length >= 3 && description.length >= 5) {
            const newTask = {
                id: uuid(),
                idColumn: 1,
                taskName,
                user,
                description,
            };

            getTask(newTask);

            taskNameInputClear();
            userInputClear();
            descriptionInputClear();
        }
    };

    return (
        <form onSubmit={addTask} className={`${classes.root}${className ? ` ${className}` : ''}`}>
            <TextField name="task" value={taskName} onChange={onChangeTaskName} text="Task:" />
            <span className={classes.alert}>{taskNameAlert}</span>
            <TextField name="description" value={description} onChange={onChangeDescription} text="Description:" />
            <span className={classes.alert}>{descriptionAlert}</span>
            <TextField name="user" value={user} onChange={onChangeUser} text="Your name:" />
            <span className={classes.alert}>{userAlert}</span>
            <input type="submit" value="Add" className={classes.submit} />
        </form>
    );
};

export default Form;
