import React, { useContext } from 'react';

import classes from './Task.module.css';

import { MoveContext, DeleteContext } from '../../context';

const Task = function (props) {
    const { id, taskName, user, description, idColumn } = props;

    const moveTask = useContext(MoveContext);
    const deleteTask = useContext(DeleteContext);

    return (
        <li className={classes.root} key={id}>
            <header>
                <h3>{taskName}</h3>
            </header>
            <p>{user}</p>
            <p>{description}</p>
            <button type="button" id="next" onClick={(e) => moveTask(e, id, idColumn)}>
                Next
            </button>
            <button type="button" id="prev" onClick={(e) => moveTask(e, id, idColumn)}>
                Prev
            </button>
            <button type="button" id="delete" onClick={() => deleteTask(id)}>
                Delete
            </button>
        </li>
    );
};

export default Task;
