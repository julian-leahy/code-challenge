import React from 'react';
import './../styles/Admin.scss';
import db from './../firebase.config';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isKeyword: false,
            type: 'keywords', // code or keywords
            question: '',
            code: '',
            solution: '',
            keywords: '',
            expected: '',
            qnumber: undefined,
            createdAt: Date.now()
        }
    }

    componentDidMount() {
        this.totalQuestion()
    }

    totalQuestion = async () => {
        const response = db.collection('challenge');
        const data = await response.get();
        this.setState({ qnumber: data.size + 1 })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.qnumber) {
            alert('error: qnumber not defined!!')
            return;
        } else {
            db.collection('challenge').add(this.state);
            this.reset();
        }

    }

    reset = () => {
        this.setState({
            question: '',
            code: '',
            solution: '',
            expected: '',
            keywords: ''
        })
    }

    onChangeValue = (e) => {
        this.setState({ isKeyword: !this.state.isKeyword, type: e.target.value })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    // TODO add keyword selection
    render() {
        const { isKeyword, question, keywords, code, expected, solution } = this.state;
        return (
            <div className='admin'>
                <form onSubmit={this.handleSubmit} className='form-admin'>

                    {/* <div className='radio-group'>
                        <div>
                            <input type="radio" value="code" name="type" checked={!isKeyword} onChange={this.onChangeValue} /><label>Code (Complete the code challenge)</label>
                        </div>
                        <div>
                            <input type="radio" value="keywords" name="type" checked={isKeyword} onChange={this.onChangeValue} /><label>Keywords (Written answers that should contain key points)</label>
                        </div>
                    </div> */}

                    <div className='input-group'>
                        <label>Question</label>
                        <input type="text" value={question} name='question' onChange={this.handleChange} required />
                        {
                            isKeyword ?
                                <>
                                    <label>Add Keywords (comma separated)</label>
                                    <textarea name="keywords" value={keywords} cols="30" rows="5" onChange={this.handleChange} required />
                                </>
                                :
                                <>
                                    <label>Start Code</label>
                                    <textarea name="code" value={code} cols="30" rows="5" onChange={this.handleChange} required />
                                    <label>Expected Output</label>
                                    <textarea name="expected" value={expected} cols="30" rows="5" onChange={this.handleChange} required />
                                    <label>Solution</label>
                                    <textarea name="solution" value={solution} cols="30" rows="5" onChange={this.handleChange} required />
                                </>
                        }
                    </div>
                    <button className='btn'>submit</button>
                </form>
            </div>
        )
    }
}


export default Admin;