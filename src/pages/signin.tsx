import React, { useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import { AppRoute }from '../constans/routes';

const SignIn: React.FC = () => {
    const history = useHistory();
    const { firebase } = useContext<any>(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const isInValid: boolean = password === "" || emailAddress === "";
    const handleSignIn = (event: any) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history.push(AppRoute.Browse);
        })
        .catch((error: any) => {
            setEmailAddress("");
            setPassword("");
            setError(error.message);
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={() => handleSignIn(event)} method="POST">
                        <Form.Input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={(event) => setEmailAddress(event.target.value)}
                        />
                        <Form.Input
                            id="password"
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={( event) => setPassword(event.target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={AppRoute.Sign_up}>Sign up now.</Form.Link>
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

export default SignIn;