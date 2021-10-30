import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, user, setUser, isLoading, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    console.log(location.state?.from);


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // ...
                // setUser(user);
                // console.log(user)
                setUser(result.user)
                history.push(redirect_uri)
                    .finally(() => setIsLoading(false));
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // setError(errorMessage);
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div className="mx-auto d-grid justify-content-md-center">
            <h2>Please Login</h2>
            {/* <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button> */}
            <button onClick={handleGoogleLogIn} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;