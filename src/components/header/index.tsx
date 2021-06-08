import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BackgroundS, ContainerS, LogoS, ButtonS, FeatureS, TextS, GroupS, PictureS, LinkS, PlayButtonS, ProfileS, DropdownS, SearchS, SearchIconS, SearchInputS, FeatureCallOutS } from './styles/header';

interface IHeader {
    bg?: boolean,
    src?: string,
    dontShowOnSmallViewPort?: boolean,
}

interface ILink {
    active?: boolean,
    onClick?: () => void,
}

interface ISearch {
    searchTerm: string,
    setSearchTerm: (value: any) => void,
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

const Group: React.FC = ({ children, ...restProps }) => {
    return <GroupS {...restProps}>{children}</GroupS>
}

const Logo: React.FC<{to: string, alt: string, src: string}> = ({ to, ...restProps }) => {
    return (
        <ReactRouterLink to={to}>
            <LogoS {...restProps} />
        </ReactRouterLink>
    )
}

const Search: React.FC<ISearch> = ({ searchTerm, setSearchTerm, ...restProps }) => {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <SearchS {...restProps}>
            <SearchIconS onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIconS>
            <SearchInputS 
                value={searchTerm} 
                onChange={({value}: any) => setSearchTerm(value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </SearchS>
    )
}

const Profile: React.FC = ({ children, ...restProps }) => {
    return <ProfileS {...restProps}>{children}</ProfileS>
}

const Picture: React.FC<{src?: string}> = ({ src, ...restProps }) => {
    return <PictureS {...restProps} src={`/images/users/${src}.png`} />
}

const Text: React.FC = ({ children, ...restProps }) => {
    return <TextS {...restProps}>{children}</TextS>
}

const Dropdown: React.FC = ({ children, ...restProps }) => {
    return <DropdownS {...restProps}>{children}</DropdownS>
}

const Link: React.FC<ILink> = ({ active, children, ...restProps }) => {
    return <LinkS active={ active === true ? active : false } {...restProps}>{children}</LinkS>
}

const Button: React.FC<{to: string}> = ({ to, children, ...restProps}) => {
    return <ButtonS to={to} {...restProps}>{children}</ButtonS>
}

const PlayButton: React.FC = ({ children, ...restProps }) => {
    return <PlayButtonS {...restProps}>{children}</PlayButtonS>
}

export default Object.assign(Header, {Frame, Logo, Button, Feature, Picture, Group, Profile, Dropdown, Text, PlayButton, FeatureCallOut, Search, Link});