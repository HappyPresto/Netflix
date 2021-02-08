import React from 'react';
import { ContainerS, InputS, ButtonS, TextS, BreakS } from './styles/opt-form';

interface IInput {
    placeholder: string;
}

const OptForm: React.FC = ({ children, ...restProps }) => {
    return <ContainerS {...restProps}>{children}</ContainerS>
}

const Input: React.FC<IInput> = ({ children, ...restProps }) => {
    return <InputS {...restProps} />
}

const Button: React.FC = ({ children, ...restProps }) => {
    return (
    <ButtonS {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </ButtonS>
    );
};

const Text: React.FC = ({ children, ...restProps }) => {
    return <TextS {...restProps}>{children}</TextS>;
}

const Break: React.FC = ({ ...restProps }) => {
    return <BreakS {...restProps} />;
}

export default Object.assign(OptForm, { Input, Button, Text, Break });