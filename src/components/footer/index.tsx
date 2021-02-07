import React from 'react';
import { ContainerS, RowS, ColumnS, LinkS, TitleS, TextS, BreakS } from './styles/footer';

interface ILink {
    href: string;
}

const Footer: React.FC = ({ children, ...restProps }) => {
    return <ContainerS {...restProps}>{children}</ContainerS>
};

const Row: React.FC = ({children, ...restProps }) => {
    return <RowS {...restProps}>{children}</RowS>
}

const Column: React.FC = ({children, ...restProps }) => {
    return <ColumnS {...restProps}>{children}</ColumnS>
}

const Link: React.FC<ILink> = ({children, ...restProps }) => {
    return <LinkS {...restProps}>{children}</LinkS>
}

const Title: React.FC = ({children, ...restProps }) => {
    return <TitleS {...restProps}>{children}</TitleS>
}

const Text: React.FC = ({children, ...restProps }) => {
    return <TextS {...restProps}>{children}</TextS>
}

const Break: React.FC = ({children, ...restProps }) => {
    return <BreakS {...restProps}>{children}</BreakS>
}

export default Object.assign(Footer, {Row, Column, Link, Title, Text, Break});