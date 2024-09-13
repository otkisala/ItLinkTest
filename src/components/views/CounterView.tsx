import React from 'react';
import Counter from '../organisms/Counter.tsx';
import ButtonText from '../molecules/ButtonText.tsx';
import Text from '../atoms/Text.tsx';

const CounterView: React.FC = () => {
    return (
        <Counter>
            {({ index, increment, decrement }) => (
                <>
                    <Text>{index}</Text>
                    <ButtonText onClick={increment} text="increment" />
                    <ButtonText onClick={decrement} text="decrement" />
                </>
            )}
        </Counter>
    );
};

export default CounterView;