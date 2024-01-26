import React from 'react'
import Navbar from '../components/Navbar'
import { useLiveGames } from '../hooks';
import GameCard from '../components/GameCard';

export default function ActiveGamesPage() {
    const games = useLiveGames();
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='text-center m-2'>Live games</h2>
                <div>
                    {
                        games.map(game => {
                            return (
                                <div key={game.id} className='p-1 item'>
                                    <GameCard game={game} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
