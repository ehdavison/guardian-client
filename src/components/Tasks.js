import React, { useEffect } from 'react';
import {useState} from 'react';
import {indexTasks} from '../api/tasks'

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
        <div>
            <h2>{task.title}</h2>
            <p>Location: {task.location}</p>
            <p>Time: {task.time}</p>
            <p>Details: {task.details}</p>
            <p>Counter: {task.timesCompleted}</p>
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