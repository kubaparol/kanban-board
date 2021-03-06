import React from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Modal.module.css';

const Modal = function (props) {
    const { className, setState, onTrue, text } = props;

    return (
        <div className={`${classes.background}${className ? ` ${className}` : ''}`}>
            <motion.div className={classes.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className={classes.closeBtnContainer}>
                    <button className={classes.closeBtn} type="button" onClick={() => setState(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={classes.body}>
                    <p className={classes.text}>{text}</p>
                </div>
                <div className={classes.footer}>
                    <button type="button" className={classes.cancelBtn} onClick={() => setState(false)}>
                        Cancel
                    </button>
                    <button type="button" className={classes.continueBtn} onClick={onTrue}>
                        Continue
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
