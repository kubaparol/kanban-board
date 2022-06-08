import React from 'react';

import classes from './Board.module.css';

import Column from '../Column';

const Board = function () {
    return (
        <section className={classes.root}>
            <h2>Board</h2>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </section>
    );
};

export default Board;
