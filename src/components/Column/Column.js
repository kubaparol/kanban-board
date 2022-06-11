import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './Column.module.css';

import Task from '../Task';

const Column = function (props) {
    const { className, id, name, limit, tasksList } = props;
    const [isOpen, setIsOpen] = useState(false);

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
            <header className={classes.header}>
                <h2 className={classes.title}>{name}</h2>
                <p className={classes.limit}>
                    {currTasksQuantity}/{limit}
                </p>
                <FontAwesomeIcon
                    icon={isOpen === true && currTasksQuantity !== 0 ? faChevronUp : faChevronDown}
                    className={classes.arrow}
                    onClick={() => (isOpen === false && currTasksQuantity !== 0 ? setIsOpen(true) : setIsOpen(false))}
                />
            </header>
            {isOpen === true ? <ul className={classes.tasks}>{renderTasks}</ul> : null}
        </li>
    );
};

export default Column;
