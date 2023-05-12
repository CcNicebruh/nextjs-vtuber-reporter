import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './auth'
import firebaseConfig from '../config'

const profile = () => {
    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            <h1>Profile</h1>
            <br></br>
            <button onClick={() => firebaseConfig.auth().signOut()} className='btn btn-denger'>Sign out</button>
        </div>
    )
}

export default profile;