import React, { useEffect } from 'react';
import {useState} from 'react';
import {indexTasks, deleteTask, updateTask} from '../api/tasks';
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
    
    
    const handleDelete = (event, task_id, index) => {
        event.preventDefault()
        deleteTask(props.userToken, task_id)
        .then((res) => {
            const updatedTasks = tasks.filter((task, idx) => idx !== index)
            return setTasks(updatedTasks)
        })
    }

    const handleIncreaseCount = (event, task, task_id, index) => {
        event.preventDefault()
        const newList = [...tasks]
        newList[index].timesCompleted = newList[index].timesCompleted + 1
        console.log(newList)
        setTasks(newList)
        updateTask(props.userToken, newList[index], task_id)
        .then((res) => {
            console.log(res)
        })
    }

    console.log(tasks)
    const tasksIndex = tasks.map((task, index) => {
        return (
        <div className='index-task-container'>
            <h2 className='index-task-title'>{task.title}</h2>
            <p className='index-task-info'>Location: {task.location}</p>
            <p className='index-task-info'>Time: {task.time}</p>
            <p className='index-task-info'>Details: {task.details}</p>
            <input type='number' defaultValue={task.timesCompleted}className='index-task-info' onChange={(e) => handleIncreaseCount(e, task, task._id, index)}></input>
            <button onClick={(e) => handleDelete(e, task._id, index)}>Delete</button>

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