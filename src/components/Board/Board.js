import React from 'react';

import classes from './Board.module.css';

import Column from '../Column';
import SplitColumn from '../SplitColumn';

const Board = function () {
    return (
        <section className={classes.root}>
            <h2>Board</h2>
            <Column />
            <SplitColumn />
            <SplitColumn />
            <Column />
            <Column />
        </section>
    );
};

export default Board;
