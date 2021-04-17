import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";
import './../styles/Editor.scss';
import Expected from './Expected';
import Output from './Output';

const dummy = `
let quote = ['bears','love','beets']
let string = quote.join(' ')
console.log(string)`

function Editor() {

    let consoleValue = '', func

    const [code, setCode] = useState(dummy);
    const [output, setOutput] = useState('');

    const handleRunCode = () => {
        consoleValue = ''
        setOutput(consoleValue)

        // hijack console and render to DOM
        console.log = (message) => {
            if (typeof message == 'object') {
                if (message instanceof Error) {
                    setOutput(`${message.name} ${message.message}`)
                } else {
                    let m = JSON && JSON.stringify ? JSON.stringify(message) : message
                    m = m.replace(/"/g, "'").replace(/'([^']+)':/g, '$1:');
                    setOutput(m);
                }
            } else {
                consoleValue += message + ' '
                setOutput(consoleValue)
            }
        }

        try {
            // eslint-disable-next-line no-new-func
            func = new Function(code)
            func()
        } catch (error) {
            // catch code errors
            console.log(error)
        }

    }

    return (
        <div className='editor-wrap'>
            <div className='editor'>
                <CodeMirror
                    className='mirror'
                    value={code}
                    autoCursor={false}
                    options={{
                        mode: 'javascript',
                        theme: 'dracula'
                    }}
                    onChange={(editor, data, value) => {
                        // add code snippet for console.log
                        if (value.includes('cc')) {
                            const newValue = value.replace('cc', 'console.log(')
                            setCode(newValue);
                            editor.focus();
                            editor.setCursor(editor.lineCount(), 0);
                        } else {
                            setCode(value);
                        }
                    }}
                />
                <div className='btn-group'>
                    <button className='btn run' onClick={handleRunCode}>Run</button>
                </div>
            </div>
            <div className='output-group'>
                <Output log={output} />
                <Expected />
            </div>
        </div>
    )
}

export default Editor;