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
        <li
            className={`${classes.root}${className ? ` ${className}` : ''}${
                currTasksQuantity === 0 ? ` ${classes.empty}` : ''
            }`}
            key={id}
        >
            <header className={classes.header}>
                <h2 className={classes.title}>{name}</h2>
                <p className={classes.limit}>
                    {currTasksQuantity}/{limit}
                </p>
            </header>
            <ul className={classes.tasks}>{renderTasks}</ul>
        </li>
    );
};

export default Column;
