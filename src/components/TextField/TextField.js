import React from 'react';

import classes from './TextField.module.css';

const TextField = function (props) {
    const { className, name, value, onChange, text } = props;

    return (
        // eslint-disable-next-line
        <label className={`${classes.root}${className ? ` ${className}` : ''}`}>
            {text}
            <input className={classes.input} type="text" name={name} value={value} onChange={onChange} />
        </label>
    );
};

export default TextField;
