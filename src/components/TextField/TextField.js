import React from 'react';

import classes from './TextField.module.css';

const TextField = function (props) {
    const { className, name, value, onChange, text, children } = props;

    return (
        // eslint-disable-next-line
        <label className={`${classes.root}${className ? ` ${className}` : ''}`}>
            {text}
            <input className={classes.input} type="text" name={name} value={value} onChange={onChange} />
            {children}
        </label>
    );
};

export default TextField;
