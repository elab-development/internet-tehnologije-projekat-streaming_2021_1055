import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../model'
import { Link } from 'react-router-dom'
import { useUserContext } from '../userContext'



export default function Navbar() {
    const { user, logout } = useUserContext();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <NavLink className='navbar-brand' to='/'>Basketball scores</NavLink>
            <div className="collapse navbar-collapse d-flex- justify-content-between align-items-center" >
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className='nav-link' to='/'>Games</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/live'>Live matches</NavLink>
                    </li>
                </ul>
                <div>
                    {
                        user ? (
                            <>
                                <span className="navbar-text mr-2">
                                    {user.firstName + ' ' + user.lastName}
                                </span>
                                <button className='btn btn-danger mx-2' onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to='login'>
                                    <button className="btn btn-outline-light my-2 my-sm-0" >Login</button>
                                </Link>
                                <Link to='register'>
                                    <button className="btn btn-outline-light my-2 my-sm-0" >Register</button>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
