import React from 'react';
import { ContainerS, BaseS, ErrorS, TitleS, TextS, TextSmallS, LinkS, InputS, SubmitS } from './styles/form';
import { ButtonHTMLAttributes, InputBaseProps, FormBaseProps } from '../../interfaces';

const Form: React.FC = ({ children, ...restProps }) => {
    return <ContainerS {...restProps}>{children}</ContainerS>;
};

const Error: React.FC = ({ children, ...restProps }) => {
    return <ErrorS {...restProps}>{children}</ErrorS>;
};

const Base: React.FC<FormBaseProps> = ({ children, ...restProps }) => {
    return <BaseS {...restProps}>{children}</BaseS>;
};

const Title: React.FC = ({ children, ...restProps }) => {
    return <TitleS {...restProps}>{children}</TitleS>;
};

const Text: React.FC = ({ children, ...restProps }) => {
    return <TextS {...restProps}>{children}</TextS>;
};

const TextSmall: React.FC = ({ children, ...restProps }) => {
    return <TextSmallS {...restProps}>{children}</TextSmallS>;
};

const Link: React.FC<{to: string}> = ({ children, ...restProps }) => {
    return <LinkS {...restProps}>{children}</LinkS>;
};

const Input: React.FC<InputBaseProps> = ({ children, ...restProps }) => {
    return <InputS {...restProps}>{children}</InputS>;
};

const Submit: React.FC<ButtonHTMLAttributes> = ({ children, ...restProps }) => {
    return <SubmitS {...restProps}>{children}</SubmitS>;
};

export default Object.assign(Form, {Error, Base, Title, Text, TextSmall, Link, Input, Submit});