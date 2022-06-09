import React from 'react';
import { v4 as uuid } from 'uuid';
import { useChangeHandler } from '../../hooks';

import classes from './Form.module.css';

import TextField from '../TextField';

const Form = function (props) {
    const { className, getTask } = props;
    const { value: taskName, onChange: onChangeTaskName, clear: taskNameInputClear } = useChangeHandler();
    const { value: user, onChange: onChangeUser, clear: userInputClear } = useChangeHandler();
    const { value: description, onChange: onChangeDescription, clear: descriptionInputClear } = useChangeHandler();

    const addTask = (e) => {
        e.preventDefault();

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
    };

    return (
        <form onSubmit={addTask} className={`${classes.root}${className ? ` ${className}` : ''}`}>
            <TextField name="task" value={taskName} onChange={onChangeTaskName} />
            <TextField name="user" value={user} onChange={onChangeUser} />
            <TextField name="description" value={description} onChange={onChangeDescription} />
            <input type="submit" value="add" />
        </form>
    );
};

export default Form;
