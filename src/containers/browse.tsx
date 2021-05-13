import React, { useState, useContext, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import FirebaseContext from '../context/firebase';
import { Header, Loading } from '../components';
import { AppRoute } from '../constans/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }: any) {
    const [profile, setProfile] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || "";

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
            {loading ? 
            (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}

            <Header src="joker1">
                <Header.Frame>
                    <Header.Logo to={AppRoute.Home} src={logo} alt="Netflix" />
                    <Header.Link>Series</Header.Link>
                    <Header.Link>Films</Header.Link>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                </Header.Feature>
            </Header>
        </>
    ) :    
    <SelectProfileContainer user={user} setProfile={setProfile} />
}