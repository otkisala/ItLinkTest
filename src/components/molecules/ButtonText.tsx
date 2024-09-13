import React from 'react';
import Button from '../atoms/Button.tsx';
import Text from '../atoms/Text.tsx';

interface ButtonTextProps {
    onClick: () => void;
    text: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ onClick, text }) => {
    return (
        <Button onClick={onClick}>
            <Text>{text}</Text>
        </Button>
    );
};

export default ButtonText;