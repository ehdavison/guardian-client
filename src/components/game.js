import React from 'react';
import Toggle from './logic'

const Game = () => {
    const {toggling, on, setOn} = Toggle()
    return (
        <div>
            <button className='start-button' onClick={() => setOn(!on)}>{toggling()}</button>
            <div className='gameboard'>
            <div className='start'></div>
            <div className='enemy'></div>
            <div className='end'></div>
        </div>
        </div>
    );
};

export default Game;