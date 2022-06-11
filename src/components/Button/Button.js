import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Button.module.css';

const Button = function (props) {
    const { className, id, onClick, text, icon } = props;

    return (
        <button
            className={`${classes.root}${className ? ` ${className}` : ''}`}
            type="button"
            id={id}
            onClick={onClick}
        >
            {text}
            {icon ? <FontAwesomeIcon icon={icon} /> : null}
        </button>
    );
};

export default Button;
