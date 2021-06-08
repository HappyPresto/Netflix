import React from 'react';
import { ContainerS, TitleS, SubTitleS } from './styles/feature';

const Feature: React.FC = ({ children, ...restProps }) => {
    return <ContainerS {...restProps}>{children}</ContainerS>
}

const Title: React.FC = ({ children, ...restProps }) => {
    return <TitleS {...restProps}>{children}</TitleS>
}

const SubTitle: React.FC = ({ children, ...restProps }) => {
    return <SubTitleS {...restProps}>{children}</SubTitleS>
}

export default Object.assign(Feature, {Title, SubTitle});