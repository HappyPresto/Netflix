import React from 'react';
import { Header } from '../components';
import { AppRoute } from '../constans/routes';
import logo from '../logo.svg';

const HeaderContainer: React.FC = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={AppRoute.Home} alt="NetFlix" src={logo}/>
                <Header.Button to={AppRoute.Sign_in}>Sign In</Header.Button>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer;