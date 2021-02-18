import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { BackgroundS, ContainerS, LogoS, ButtonS} from './styles/header';

interface IHeader {
    bg?: boolean,
}


const Header: React.FC<IHeader> = ({ bg, children, ...restProps }) => {
    return bg ? <BackgroundS src={null} {...restProps}>{children}</BackgroundS> : <>{children}</>
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

const Button: React.FC<{to: string}> = ({ to, children, ...restProps}) => {
    return <ButtonS to={to} {...restProps}>{children}</ButtonS>
}

Header.defaultProps = {
    bg: true
};


export default Object.assign(Header, {Frame, Logo, Button});