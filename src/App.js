import React, { useEffect, useState } from 'react';
import './App.css';

import Board from './components/Board';
import Form from './components/Form';

import { useStorage } from './hooks';
import { MoveContext, DeleteContext } from './context';

function App() {
    const [getItem, setItem] = useStorage();
    const [tasks, setTasks] = useState(getItem() || []);

    const columns = [
        { id: 1, name: 'Pending', limit: 6 },
        { id: 2, name: 'Analysis', limit: 3 },
        { id: 3, name: 'Development', limit: 5 },
        { id: 4, name: 'Test', limit: 3 },
        { id: 5, name: 'Deploy', limit: 5 },
    ];

    useEffect(() => {
        setItem(tasks);
    }, [tasks]);

    const findIndexOfColumnNextTo = (idCurrentColumn, prevOrNext) => {
        const currColumnIndex = columns.findIndex((column) => column.id === idCurrentColumn);

        if (prevOrNext === 'next') return currColumnIndex <= columns.length ? columns[currColumnIndex + 1] : null;
        if (prevOrNext === 'prev') return currColumnIndex <= columns.length ? columns[currColumnIndex - 1] : null;

        return null;
    };

    const moveTask = (e, id, idColumn) => {
        const button = e.currentTarget.id;
        const [currentTask] = tasks.filter((task) => task.id === id);

        const nextOrPrevColumn =
            button === 'next' ? findIndexOfColumnNextTo(idColumn, 'next') : findIndexOfColumnNextTo(idColumn, 'prev');

        if (nextOrPrevColumn !== undefined) {
            const tasksCopy = [...tasks];
            const tasksQuantity = tasksCopy.filter((task) => task.idColumn === nextOrPrevColumn.id).length;

            if (tasksQuantity < nextOrPrevColumn.limit) {
                const currentTaskIndex = tasks.findIndex((task) => task.id === id);
                tasksCopy.splice(currentTaskIndex, 1);

                if (button === 'next') currentTask.idColumn += 1;
                if (button === 'prev') currentTask.idColumn -= 1;

                tasksCopy.push(currentTask);
                return setTasks(tasksCopy);
            }
        }
        return null;
    };

    const deleteTask = (taskId) => {
        const tasksWithoutDeleted = tasks.filter((task) => task.id !== taskId);
        setTasks(tasksWithoutDeleted);
    };

    const getTask = (newTask) => {
        const pendingTasks = [...tasks].filter((task) => task.idColumn === 1);
        if (pendingTasks.length < columns[0].limit) setTasks([...tasks, newTask]);
    };

    return (
        <main>
            <header className="header">
                <h1 className="header__title">Team Board</h1>
            </header>
            <section className="kanban">
                <MoveContext.Provider value={moveTask}>
                    <DeleteContext.Provider value={deleteTask}>
                        <Board columns={columns} tasksList={tasks} />
                    </DeleteContext.Provider>
                </MoveContext.Provider>
                <Form getTask={getTask} />
            </section>
        </main>
    );
}

export default App;
