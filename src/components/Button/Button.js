import React from 'react';

import classes from './Button.module.css';

const Button = function (props) {
    const { className, id, onClick, text } = props;

    return (
        <button
            className={`${classes.root}${className ? ` ${className}` : ''}`}
            type="button"
            id={id}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
