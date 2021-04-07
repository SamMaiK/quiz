import React from 'react';

const OptionsList = ({options, onChange, answer}) => {
    return (
        <>
            {options.map(option => (
                <div key={option}>
                    <label>
                        <input
                            type="radio"
                            value={option}
                            checked={answer === option}
                            onChange={(e) => {
                                onChange(e.target.value)
                            }}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </>
    )
};

export default OptionsList;