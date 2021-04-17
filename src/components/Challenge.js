import React from 'react';
import Editor from './Editor';
import Question from './Question';

function Challenge() {
    return (
        <div className='challenge'>
            <Question />
            <Editor />
        </div>
    )
}

export default Challenge;