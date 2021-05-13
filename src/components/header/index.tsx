import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BackgroundS, ContainerS, LogoS, ButtonS, FeatureS, TextS, LinkS, FeatureCallOutS } from './styles/header';

interface IHeader {
    bg?: boolean,
    src?: string,
    dontShowOnSmallViewPort?: boolean,
}

interface ILink {
    active?: boolean,
}

const Header: React.FC<IHeader> = ({ bg = true, src, dontShowOnSmallViewPort = false, children, ...restProps }) => {
    return bg ? <BackgroundS 
        src={src ? src : null} 
        dontShowOnSmallViewPort={true} 
        {...restProps}
    >
        {children}
    </BackgroundS> : <>
        {children}
    </>
}

const Feature: React.FC = ({ children, ...restProps }) => {
    return <FeatureS {...restProps}>{children}</FeatureS>
}

const FeatureCallOut: React.FC = ({ children, ...restProps }) => {
    return <FeatureCallOutS {...restProps}>{children}</FeatureCallOutS>
}

const Frame: React.FC = ({ children, ...restProps }) => {
    return <ContainerS {...restProps}>{children}</ContainerS>
}

const Logo: React.FC<{to: string, alt: string, src: string}> = ({ to, ...restProps }) => {
    return (
        <ReactRouterLink to={to}>
            <LogoS {...restProps} />
        </ReactRouterLink>
    )
}

const Text: React.FC = ({ children, ...restProps }) => {
    return <TextS {...restProps}>{children}</TextS>
}

const Link: React.FC<ILink> = ({ active, children, ...restProps }) => {
    return <LinkS active={ active ? active : false } {...restProps}>{children}</LinkS>
}

const Button: React.FC<{to: string}> = ({ to, children, ...restProps}) => {
    return <ButtonS to={to} {...restProps}>{children}</ButtonS>
}

Header.defaultProps = {
    bg: true
};


export default Object.assign(Header, {Frame, Logo, Button, Feature, Text, FeatureCallOut, Link});