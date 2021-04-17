import React from 'react';

function Expected({ expect }) {
    return (
        <div className='expected-output'>
            <div className='title'>
                <h1>Expected output</h1>
            </div>
            <div className='output'>
                <div className='output__inner'>
                    {expect}
                </div>
            </div>
        </div>
    )
}

export default Expected;