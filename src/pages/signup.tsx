import React, { useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constans/routes';

const SignUp: React.FC = () => {
    const history = useHistory();
    const { firebase } = useContext<any>(FirebaseContext);
    const [firstName, setFirstName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const isInValid: boolean = firstName === "" || password === "" || emailAddress === "";
    
    const handleSignUp = (event: any) => {
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
        .then((result: any) => {
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
        })
        .catch((error: any) => {
            setFirstName("");
            setEmailAddress("");
            setPassword("");
            setError(error.message);
        });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={() => handleSignUp(event)} method="POST">
                        <Form.Input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            id="password"
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Alreary a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default SignUp;