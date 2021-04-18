import React from 'react';
import './../styles/Question.scss';

function Question({ question }) {
    return (
        <div className='question'>
            {question}
        </div>
    )
}

export default Question;