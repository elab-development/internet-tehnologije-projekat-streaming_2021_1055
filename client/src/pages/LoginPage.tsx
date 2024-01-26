import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useUserContext } from '../userContext'
import Input from '../components/Input';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function LoginPage() {
    const { login } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        setError('');
    }, [email, password])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='text-center m-2'>
                    Login
                </h2>
                <form onSubmit={async e => {
                    e.preventDefault();
                    try {
                        await login({ email, password });

                        navigate('/');
                    } catch (error) {
                        if (axios.isAxiosError(error)) {
                            setError(error.response?.data.message || '')
                        } else {
                            setError('An error has occured')
                        }
                    }
                }}>
                    <Input value={email} onChange={setEmail} label='Email' type='email' required />
                    <Input value={password} onChange={setPassword} label='Password' type='password' required />
                    <button className='mt-2 btn btn-outline-secondary form-control'>Login</button>
                </form>
                {
                    error && (
                        <h3 className='mt-2 text-center text-danger'>{error}</h3>
                    )
                }
            </div>
        </div>
    )
}
