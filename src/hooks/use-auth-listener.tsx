import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
    const localParse: any = localStorage.getItem('authUser')
    const [user, setUser] = useState<any>(
        JSON.parse(localParse)
    );
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            }
            else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return listener();
    }, []);

    return { user }; 
}
