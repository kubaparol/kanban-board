import React from 'react';

import classes from './TextField.module.css';

const TextField = function (props) {
    const { className, name, value, onChange } = props;

    return (
        <input
            className={`${classes.root}${className ? ` ${className}` : ''}`}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextField;
