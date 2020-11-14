import React, {useState} from 'react'
import axios from 'axios'

function Login(props) {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function handleClick(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {
            email,
            password
        })
        .then(() => props.history.push("/"))
        .catch(err => console.log(err))
    }
    
    return (
        <div className='formContainer'>
            <div className='form'>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                <input type='submit' onClick={handleClick} value='Login'/>
            </div>
        </div>
    )
}

export default Login