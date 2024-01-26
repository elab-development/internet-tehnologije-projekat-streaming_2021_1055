import React, { useContext } from 'react'
import { LoginUser, RegisterUser, User } from './model';

export interface UserContextType {
    user?: User,
    logout: () => void,
    login: (loginUser: LoginUser) => void,
    register: (registerUser: RegisterUser) => void
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const c = useContext(UserContext);
    if (!c) {
        throw new Error('Not inside context');
    }
    return c;
}