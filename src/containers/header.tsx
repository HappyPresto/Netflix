import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constans/routes';
import logo from '../logo.svg';

const HeaderContainer: React.FC = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="NetFlix" src={logo}/>
                <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer;