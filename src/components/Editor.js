import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";
import './../styles/Editor.scss';
import Expected from './Expected';
import Output from './Output';


function Editor({ code, expected, next }) {

    let consoleValue = '', func

    const [value, setValue] = useState(code)
    const [output, setOutput] = useState('');

    useEffect(() => {
        setValue(code)
    }, [code])

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
            func = new Function(value)
            func()
        } catch (error) {
            // catch code errors
            console.log(error)
        }

    }

    const handleResetCode = () => {
        setValue(code);
    }

    return (
        <div className='editor-wrap'>
            <div className='editor'>
                <CodeMirror
                    className='mirror'
                    value={value}
                    autoCursor={false}
                    options={{
                        mode: 'javascript',
                        theme: 'dracula'
                    }}
                    onChange={(editor, data, value) => {
                        // add code snippet for console.log
                        if (value.includes('cc')) {
                            const newValue = value.replace('cc', 'console.log(')
                            setValue(newValue);
                            editor.focus();
                            editor.setCursor(editor.lineCount(), 0);
                        } else {
                            setValue(value);
                        }
                    }}
                />
                <div className='btn-group'>
                    <button className='btn run' onClick={handleRunCode}>Run</button>
                    <button className='btn next' onClick={next}>Next</button>
                    <button className='btn reset' onClick={handleResetCode}>Reset</button>
                </div>
            </div>
            <div className='output-group'>
                <Output log={output} />
                <Expected expect={expected} />
            </div>
        </div>
    )
}

export default Editor;