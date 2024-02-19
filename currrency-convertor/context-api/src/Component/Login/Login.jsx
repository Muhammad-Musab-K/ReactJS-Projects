import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext/UserContext'
function Login() {

    const {setUser} = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =()=>{
            setUser({ username, password })
    }  
    return (
        <div>
            <label htmlFor="">Username</label>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
