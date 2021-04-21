import React from 'react';
import './../styles/Finish.scss';

function Finish({ again }) {
    return (
        <div className='finish'>
            <div className='finish-text'>
                <p>Challenge Completed</p>
                <button className='again btn' onClick={again}>Try Again</button>
            </div>
        </div>
    )
}

export default Finish;