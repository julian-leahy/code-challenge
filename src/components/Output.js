import React from 'react';
import './../styles/Output.scss';

function Output({ log }) {
    return (

        <div className='user-output'>
            <div className='title'>
                <h1>User output</h1>
            </div>
            <div className='output'>
                <div className='output__inner'>
                    {log}
                </div>
            </div>
        </div>

    )
}

export default Output;