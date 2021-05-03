import React, { useState, useContext, useEffect } from 'react';
import SelectProfileContainer from './profiles';
import FirebaseContext from '../context/firebase';
import { Loading } from '../components';

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
        loading ? <Loading src={user.photoURL} /> : null
    ) :    
    <SelectProfileContainer user={user} setProfile={setProfile} />
}