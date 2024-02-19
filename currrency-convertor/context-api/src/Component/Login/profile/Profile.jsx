import React from 'react'
import UserContext from '../../../Context/UserContext/UserContext'
import { useContext } from 'react'

function Profile() {

    const { user } = useContext(UserContext)
    return (
        <>
            <p>{user?.username}</p>
        </>
    )
}

export default Profile
