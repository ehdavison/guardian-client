import React from 'react';
import {useState} from 'react';

const TaskCreate = (props) => {
    const [title, setTitle] = useState();
    const [location, setLocation] = useState();
    const [time, setTime] = useState();
    const [details, setDetails] = useState();
    const [completed, setCompleted] = useState(0);

    return (
        <div>
            <form>
                <h2>Create a task!</h2>
                <label className='title-input' for='title'>Title</label>
                <input className='title-input' name='title' type='text' placeholder='Title' onChange={(event) => setTitle(event.target.value)}></input>

                <label className='location-input' for='location'>Location</label>
                <input className='location-input' name='location' type='text' placeholder='Location' onChange={(event) => setLocation(event.target.value)}></input>

                <label className='time-input' for='time'>Time</label>
                <input className='time-input' name='time' type='text' placeholder='Time' onChange={(event) => setTime(event.target.value)}></input>

                <label className='details-input' for='details'>Details</label>
                <input className='details-input' name='details' type='text' placeholder='Details' onChange={(event) => setDetails(event.target.value)}></input>

                <label className='completed-input' for='completed'>Times Completed</label>
                <input className='completed-input' name='completed' type='number' placeholder='Times Completed' onChange={(event) => setCompleted(event.target.value)}></input>
                

            </form>
        </div>
    );
};

export default TaskCreate;