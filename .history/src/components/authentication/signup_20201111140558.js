import React, {useState} from 'react'
import axios from 'axios'

function Singup(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function handleClick(e) {
        e.preventDefault()
        setPasswordError('')
        setEmailError('')
        
        axios.post('http://localhost:3001/signup', {
            email,
            password
        }, {withCredentials: true})
        .then((res) => {
            setPassword('')
            setEmail('')
            props.history.push("/")
        })
        .catch(err => {
            setPassword('')
            setEmailError(err.response.data.errors.email)
            setPasswordError(err.response.data.errors.password)
        })
    }
    
    return (
        <div className='formContainer'>
            <div className='form'>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <div>{emailError}</div>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                <div>{passwordError}</div>
                <input type='submit' onClick={handleClick} value='Sign Up'/>
            </div>
        </div>
    )
}

export default Singup