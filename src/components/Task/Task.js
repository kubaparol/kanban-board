import React, { useContext } from 'react';

import classes from './Task.module.css';

import Button from '../Button';
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
            <Button id="next" onClick={(e) => moveTask(e, id, idColumn)} text="Dalej" />
            <Button id="prev" onClick={(e) => moveTask(e, id, idColumn)} text="Wstecz" />
            <Button id="delete" onClick={() => deleteTask(id)} text="Usuń" />
        </li>
    );
};

export default Task;
