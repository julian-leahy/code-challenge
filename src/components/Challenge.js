import React from 'react';
import Editor from './Editor';
import Question from './Question';
import db from './../firebase.config';
import Finish from './Finish';
import Preload from './Preload';
import { CSSTransition } from 'react-transition-group';

class Challenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restart: false,
            preload: true
        }
    }

    componentDidMount() {
        this.totalQuestion();
    }

    totalQuestion = async () => {
        const response = db.collection('challenge');
        const data = await response.get();

        // generarate and shuffle array containing 1 .. N representing question numbers
        const array = [...Array(data.size).keys()].map(x => ++x);
        const shuffledArray = array.sort(() => 0.5 - Math.random());

        // get first question
        const initQuestion = shuffledArray.pop();

        this.setState({ questionNumbers: shuffledArray, preload: false });
        this.fetchQuestion(initQuestion);

    }

    // TODO check end of questions
    nextQuestion = () => {
        const currentQuestions = this.state.questionNumbers;
        if (currentQuestions.length === 0) {
            this.setState({ restart: true })

        } else {
            const next = currentQuestions.pop();
            this.setState({ questionNumbers: currentQuestions });
            this.fetchQuestion(next);
        }
    }

    fetchQuestion = async (n) => {
        const response = db.collection('challenge').where('qnumber', '==', n);
        const data = await response.get();
        data.docs.forEach(item => {
            this.setState({
                type: item.data().type,
                code: item.data().code,
                question: item.data().question,
                expected: item.data().expected,
                solution: item.data().solution,
                keywords: item.data().keywords
            })
        })
    }

    playAgain = () => {
        this.setState({ preload: true, restart: false });
        this.totalQuestion();
    }



    render() {
        const { question, code, expected, solution } = this.state;
        const nodeRef = React.createRef(null);
        return (
            <div className='challenge'>
                <Question question={question} />
                <Editor code={code} expected={expected} next={this.nextQuestion} solution={solution} />
                {
                    this.state.restart ? <Finish again={this.playAgain} /> : null
                }
                <CSSTransition
                    nodeRef={nodeRef}
                    in={this.state.preload}
                    timeout={1000}
                    classNames={'loaded'}
                >
                    <div ref={nodeRef}>
                        <Preload />
                    </div>


                </CSSTransition>


            </div>
        )
    }
}

export default Challenge;