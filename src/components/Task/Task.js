import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faTrash, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import classes from './Task.module.css';

import Button from '../Button';
import Modal from '../Modal';
import { MoveContext, DeleteContext } from '../../context';

const Task = function (props) {
    const [openModal, setOpenModal] = useState(false);
    const { className, id, taskName, user, description, idColumn } = props;

    const moveTask = useContext(MoveContext);
    const deleteTask = useContext(DeleteContext);

    return (
        <li className={`${classes.root}${className ? ` ${className}` : ''}`} key={id}>
            <header className={classes.header}>
                <FontAwesomeIcon icon={faBarsStaggered} />
                <h3 className={classes.title}>{taskName}</h3>
            </header>
            <p className={`${classes.description} ${classes.cut_string}`}>{description}</p>
            <div className={classes.user__container}>
                <div className={classes.user__circle}>{user.charAt(0)}</div>
                <p className={`${classes.user} ${classes.cut_string}`}>{user}</p>
            </div>
            <div className={classes.buttons__container}>
                <Button
                    id="prev"
                    onClick={(e) => moveTask(e, id, idColumn)}
                    icon={faArrowUp}
                    className={classes.icon__prev}
                />
                <Button
                    id="next"
                    onClick={(e) => moveTask(e, id, idColumn)}
                    icon={faArrowDown}
                    className={classes.icon__next}
                />
                <Button
                    id="delete"
                    onClick={() => setOpenModal(true)}
                    icon={faTrash}
                    className={classes.icon__delete}
                />
            </div>
            {openModal && <Modal setState={setOpenModal} onTrue={() => deleteTask(id)} text="Task will be delete!" />}
        </li>
    );
};

export default Task;
