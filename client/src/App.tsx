import React, { useState } from 'react';
import './App.css';
import { LoginUser, RegisterUser, User } from './model';
import { Route, Routes } from 'react-router';
import GameSearchPage from './pages/GameSearchPage';
import StreamPage from './pages/StreamPage';
import GameStatisticsPage from './pages/GameStatisticsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContext } from './userContext';
import axios from 'axios';
import ActiveGamesPage from './pages/ActiveGamesPage';



function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const logout = async () => {
    await axios.post('/api/logout');
    setUser(undefined);
    axios.defaults.headers.common.Authorization = ''
  }
  const login = async (loginUser: LoginUser) => {
    const res = await axios.post('/api/login', loginUser);
    setUser(res.data.user);
    axios.defaults.headers.common.Authorization = 'Bearer ' + res.data.token;
  }
  const register = async (registerUser: RegisterUser) => {
    const res = await axios.post('/api/register', registerUser);
    setUser(res.data.user);
    axios.defaults.headers.common.Authorization = 'Bearer ' + res.data.token;
  }
  return (
    <div >

      <UserContext.Provider
        value={{
          user,
          logout,
          login,
          register
        }}
      >

        <Routes>
          <Route path='*' element={<GameSearchPage />} />
          <Route path='live' element={<ActiveGamesPage />} />
          <Route path='stream/:id' element={<StreamPage />} />
          {
            user && (
              <Route path='/game/:id' element={<GameStatisticsPage />} />
            )
          }
          {
            !user && (
              <>
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
              </>
            )
          }
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
