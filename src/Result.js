import React from 'react';

const Result = ({onRetry, answers, rightAnswers}) => {
    const amountOfRightAnswers = answers.filter((answer, index) => answer === rightAnswers[index]).length;
    const score = Number(Math.round(amountOfRightAnswers * 100 / answers.length + 'e2') + 'e-2');
    return (
        <>
            <p>Your score is {score}% ({amountOfRightAnswers} / {answers.length})</p>
            <button onClick={onRetry}>Retry</button>
        </>
    )
};

export default Result;