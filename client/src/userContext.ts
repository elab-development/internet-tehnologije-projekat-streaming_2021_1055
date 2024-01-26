import React, { useContext } from 'react'
import { LoginUser, RegisterUser, User } from './model';

export interface UserContextType {
    user?: User,
    logout: () => Promise<void>,
    login: (loginUser: LoginUser) => Promise<void>,
    register: (registerUser: RegisterUser) => Promise<void>
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const c = useContext(UserContext);
    if (!c) {
        throw new Error('Not inside context');
    }
    return c;
}