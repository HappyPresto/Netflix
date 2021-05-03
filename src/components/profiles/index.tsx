import React from 'react';
import {ContainerS, ListS, ItemS, PictureS, NameS, TitleS} from './styles/profiles';

type UserOptions = {
    onClick?: () => void;
}

const Profiles: React.FC = ({ children, ...restProps }) => {
    return <ContainerS { ...restProps }>{children}</ContainerS>;
};

const Title: React.FC = function ProfilesTitle({children, ...restProps }) {
    return <TitleS {...restProps}>{children}</TitleS>
};

const List: React.FC = function ProfilesTitle({children, ...restProps }) {
    return <ListS {...restProps}>{children}</ListS>
};

const User: React.FC<UserOptions> = function ProfilesUser({children, ...restProps }) {
    return <ItemS {...restProps}>{children}</ItemS>
};

const Picture: React.FC<{src: String}> = function ProfilesPicture({src, children, ...restProps }) {
    return <PictureS {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}>{children}</PictureS>
};

const Name: React.FC = function ProfilesName({children, ...restProps }) {
    return <NameS {...restProps}>{children}</NameS>
};

export default Object.assign(Profiles, {Title, List, User, Picture, Name});