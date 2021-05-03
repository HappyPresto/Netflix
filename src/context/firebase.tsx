import { createContext } from 'react';

interface IFirebaseContext {
    firebase: Object;
}

const FirebaseContext = createContext<any>(null);//<Partial<IFirebaseContext>>({}); // Partial - allow create Context without default values

export default FirebaseContext;