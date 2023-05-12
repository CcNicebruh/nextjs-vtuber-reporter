import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from "./auth"

const Homely = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div className="container mt-5">
                <h1>Home</h1>
                {currentUser ? (
                    <p>You are logged in - <Link to="/profile">View Profile</Link></p>
                ) : (
                    <p>
                        You are not logged in - <Link to="/login">Sign in</Link> or <Link to="/register">Sign Up</Link>
                    </p>
                )}
            </div>
        </>
    )
}

export default Homely;