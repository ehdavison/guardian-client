import React from 'react';
import {useState} from 'react';
import {createTask} from '../api/tasks';

const TaskCreate = (props) => {
    const [task, setTask] = useState({ title: '', location: '', time: '', details: '', timesCompeted: 0 })

    const handleChange = event => {
    event.persist()
        setTask(prevTask => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedTask = Object.assign({}, prevTask, updatedField)

        return editedTask
        })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(props.userToken)
        createTask(props.userToken, task)
        .then((res) => {
            console.log(res)
            console.log('task is: ', task)
        })
    }  
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Create a task!</h2>
                <label className='title-input' for='title'>Title</label>
                <input className='title-input' name='title' type='text' placeholder='Title' onChange={handleChange}></input>

                <label className='location-input' for='location'>Location</label>
                <input className='location-input' name='location' type='text' placeholder='Location' onChange={handleChange}></input>

                <label className='time-input' for='time'>Time</label>
                <input className='time-input' name='time' type='text' placeholder='Time' onChange={handleChange}></input>

                <label className='details-input' for='details'>Details</label>
                <input className='details-input' name='details' type='text' placeholder='Details' onChange={handleChange}></input>

                <label className='completed-input' for='completed'>Times Completed</label>
                <input className='completed-input' name='timesCompleted' type='number' placeholder='Times Completed' onChange={handleChange}></input>
                
                <input className='submit' type='submit' value='Submit'></input>

            </form>
        </div>
    );
};

export default TaskCreate;