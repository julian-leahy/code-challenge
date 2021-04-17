import React from 'react';
import './../styles/Editor.scss';
import Expected from './Expected';
import Output from './Output';

function Editor() {
    return (
        <div className='editor-wrap'>
            <div className='editor'>
                Editor
            </div>
            <div className='output-group'>
                <Output />
                <Expected />
            </div>
        </div>
    )
}

export default Editor;