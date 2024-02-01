import React from 'react'
import Navbar from '../components/Navbar'
import { useGame } from '../hooks'
import { useNavigate } from 'react-router';
import TeamOverview from '../components/TeamOverview';
import { format } from 'date-fns';

export default function GameStatisticsPage() {
    const { game, loading } = useGame();
    const navigate = useNavigate();
    if (loading) {
        return null;
    }
    if (!game) {
        navigate('/');
        return null;
    }
    const host = game?.teams.find(t => t.host);
    const guest = game?.teams.find(t => !t.host);
    return (
        <div>
            <Navbar />
            <div className='container mt-4'>
                <h6 className='text-center text-muted m-1'>{format(game.startTime, 'HH:mm dd.MM.yyyy')}</h6>
                <h2 className='text-center'>
                    {`${host?.points || 0} - ${guest?.points || 0}`}
                </h2>
                <div className='row'>
                    <div className='col-6 pe-1'>
                        {
                            host && (
                                <TeamOverview teamStatistics={host} playersStatistics={game.players.filter(player => {
                                    return player.player.teamId === host.team.id
                                })} />
                            )
                        }
                    </div>
                    <div className='col-6 ps-1'>
                        {
                            guest && (
                                <TeamOverview teamStatistics={guest} playersStatistics={game.players.filter(player => {
                                    return player.player.teamId === guest.team.id
                                })} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
