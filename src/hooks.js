import { useState } from 'react';

export const useChangeHandler = () => {
    const [value, setValue] = useState('');

    return {
        value,
        onChange: (e) => setValue(e.target.value),
        clear: () => setValue(''),
    };
};

export const useStorage = () => {
    const getItem = () => JSON.parse(window.localStorage.getItem('tasks'));

    const setItem = (tasks) => window.localStorage.setItem('tasks', JSON.stringify(tasks));

    return [getItem, setItem];
};


export const useValidation = () => {
    const [alert, setAlert] = useState('');

    return {
        alert,
        displayMessage: (message) => setAlert(message),
    };
};