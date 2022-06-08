import React from 'react';

import classes from './SplitColumn.module.css';

const SplitColumn = function () {
    return (
        <article className={classes.root}>
            <h2>SplitColumn</h2>
            <div>
                <h3>Doing</h3>
            </div>
            <div>
                <h3>Done</h3>
            </div>
        </article>
    );
};

export default SplitColumn;
