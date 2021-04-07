import React, {useState} from 'react';
import './App.css';
import questions from './questions';
import Question from "./Question";
import OptionsList from "./OptionsList";
import Actions from "./Actions";
import Result from "./Result";

const initialAnswers = new Array(questions.length).fill('');

function App() {
    const [resultMode, setResultMode] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(initialAnswers);
    const {text, options} = questions[currentQuestionIndex];
    return (
        <div className="app">
            <div className="question-block">
                {resultMode ? (
                    <Result
                        answers={answers}
                        rightAnswers={questions.map(question => question.answer)}
                        onRetry={() => {
                            setAnswers(initialAnswers);
                            setCurrentQuestionIndex(0);
                            setResultMode(false);
                        }}
                    />
                ) : (
                    <>
                        <Question
                            text={text}
                        />
                        <OptionsList
                            answer={answers[currentQuestionIndex]}
                            options={options}
                            onChange={(option) => {
                                setAnswers(answers.map((curAnswer, index) => {
                                    if (index === currentQuestionIndex) {
                                        return option;
                                    }
                                    return curAnswer;
                                }))
                            }}
                        />
                        <Actions
                            prev={currentQuestionIndex > 0}
                            onPrevClick={() => setCurrentQuestionIndex(questionIndex => questionIndex - 1)}
                            next={currentQuestionIndex < questions.length - 1}
                            onNextClick={() => setCurrentQuestionIndex(questionIndex => questionIndex + 1)}
                            done={currentQuestionIndex === questions.length - 1}
                            onDoneClick={() => setResultMode(true)}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
