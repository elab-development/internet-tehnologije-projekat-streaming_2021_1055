import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './model';
import { Route, Routes } from 'react-router';
import GameSearchPage from './pages/GameSearchPage';
import StreamPage from './pages/StreamPage';
import GameStatisticsPage from './pages/GameStatisticsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <div >

      <Routes>
        <Route path='*' element={<GameSearchPage />} />
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
    </div>
  );
}

export default App;
