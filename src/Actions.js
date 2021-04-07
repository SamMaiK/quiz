import React from 'react';
import './Actions.css';

const Actions = ({
    prev,
    onPrevClick,
    next,
    onNextClick,
    done,
    onDoneClick
}) => {
    return (
        <div className="actions">
            {prev && <button onClick={onPrevClick}>Prev</button>}
            {next && <button onClick={onNextClick}>Next</button>}
            {done && <button onClick={onDoneClick}>Done</button>}
        </div>
    )
};

export default Actions;