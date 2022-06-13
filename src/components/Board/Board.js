import React from 'react';

import classes from './Board.module.css';

import Column from '../Column';

const Board = function (props) {
    const { className, columns, tasksList } = props;

    const renderColumns = columns.map((column) => (
        <Column id={column.id} name={column.name} limit={column.limit} tasksList={tasksList} />
    ));

    return (
        <section className={`${classes.root}${className ? ` ${className}` : ''}`}>
            <ul className={classes.columns__list}>{renderColumns}</ul>
        </section>
    );
};

export default Board;
