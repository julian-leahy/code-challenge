import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import React from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";
import './../styles/Editor.scss';
import Expected from './Expected';
import Output from './Output';

const dummy = `
let quote = ['bears','love','beets']
let string = quote.join('')
console.log(string)
`

function Editor() {
    return (
        <div className='editor-wrap'>
            <div className='editor'>
                <CodeMirror
                    className='mirror'
                    value={dummy}
                    autoCursor={false}
                    options={{
                        mode: 'javascript',
                        theme: 'dracula',
                        lineNumbers: false,
                        lineWrapping: true,
                    }}
                    onChange={(editor, data, value) => {
                        // update state
                    }}
                />
            </div>
            <div className='output-group'>
                <Output />
                <Expected />
            </div>
        </div>
    )
}

export default Editor;