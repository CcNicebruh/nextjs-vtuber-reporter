import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import firebaseConfig from "../config.js";

const signup = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <>
            <center><h1>Sign Up</h1></center>
            <br />
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="trustorlie@electronicmail.net" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="1amPazWord" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default signup;