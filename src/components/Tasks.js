import React, { useEffect } from 'react';
import {useState} from 'react';
import {indexTasks} from '../api/tasks';
import './tasks.css';

const Tasks = (props) => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        indexTasks(props.userToken)
        .then((res) => {
            setTasks(res.data.tasks)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.userToken]);
    
    const tasksIndex = tasks.map((task) => {
        return (
        <div className='index-task-container'>
            <h2 className='index-task-title'>{task.title}</h2>
            <p className='index-task-info'>Location: {task.location}</p>
            <p className='index-task-info'>Time: {task.time}</p>
            <p className='index-task-info'>Details: {task.details}</p>
            <p className='index-task-info'>Counter: {task.timesCompleted}</p>
        </div>
    )});

    return (
        <div>
            {!tasks && (
                <div>
                    Loading...
                </div>
            )}

            {tasks && (
                <div>
                    {tasksIndex}
                </div>
            )} 
        </div>
    );
};

export default Tasks;