import React, { useState } from 'react';

interface CounterProps {
    children: (props: {
        index: number;
        increment: () => void;
        decrement: () => void;
    }) => React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ children }) => {
    const [index, setIndex] = useState(0);
    const increment = () => setIndex(index + 1);
    const decrement = () => setIndex(index - 1);

    return (
        <>
            {children({ index, increment, decrement })}
        </>
    );
};

export default Counter;