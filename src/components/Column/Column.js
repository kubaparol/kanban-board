import React from 'react';

import classes from './Column.module.css';

import Task from '../Task';

const Column = function (props) {
    const { className, id, name, limit, tasksList } = props;

    const renderTasks = tasksList.map((task) =>
        task.idColumn === id ? (
            <Task
                id={task.id}
                taskName={task.taskName}
                key={task.id}
                user={task.user}
                description={task.description}
                idColumn={task.idColumn}
            />
        ) : null,
    );

    const currTasksQuantity = tasksList.filter((task) => task.idColumn === id).length;

    return (
        <li className={`${classes.root}${className ? ` ${className}` : ''}`} key={id}>
            <header>
                <h2>{name}</h2>
                <p>
                    {currTasksQuantity}/{limit}
                </p>
            </header>
            <ul>{renderTasks}</ul>
        </li>
    );
};

export default Column;
