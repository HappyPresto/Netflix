import React from 'react';
import { Header, Profiles } from '../components';
import { AppRoute } from '../constans/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user, setProfile }: any) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={AppRoute.Home} src={logo} alt="Netflix" />
                </Header.Frame>

                <Profiles>
                    <Profiles.Title>
                        Who's watching?
                    </Profiles.Title>
                    <Profiles.List>
                        <Profiles.User 
                            onClick={() => setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })}
                        >
                            <Profiles.Picture src={user.photoURL} />
                            <Profiles.Name>{user.displayName}</Profiles.Name>
                        </Profiles.User>
                    </Profiles.List>
                </Profiles>
            </Header>
        </>
    );
}   