import React from 'react'
import Navbar from '../components/Navbar'
import { useGamesSearch, useTeams } from '../hooks'
import GameCard from '../components/GameCard';
import Input from '../components/Input';
import { useLocation, useNavigate } from 'react-router';
import Select from '../components/Select';

export default function GameSearchPage() {
    const games = useGamesSearch();
    const search = useLocation().search;
    const parsed = new URLSearchParams(search);
    const navigate = useNavigate();
    const teams = useTeams();
    const onChange = (name: string, value: string) => {
        parsed.set(name, value);
        navigate('?' + parsed.toString())
    }

    return (
        <div>
            <Navbar />
            <div className='px-3'>
                <h2 className='text-center'>Games</h2>
                <div className='row mx-2 my-4'>
                    <div className='col-4 px-5'>
                        <h4 className='text-center pb-2'>
                            Search
                        </h4>
                        <Input label='From' type='date' value={parsed.get('from') || undefined} onChange={val => {
                            onChange('from', val)
                        }} />
                        <Input label='To' type='date' value={parsed.get('to') || undefined} onChange={val => {
                            onChange('to', val)
                        }} />
                        <Select emptyLabel='Select team...' label='Team' value={parsed.get('teamId') || undefined} onChange={val => {
                            onChange('teamId', val)
                        }}
                            data={teams.map(team => {
                                return {
                                    label: team.name,
                                    value: team.id
                                }
                            })}
                        />
                    </div>
                    <div className='col-7'>
                        {
                            games?.data.map(game => {
                                return (
                                    <GameCard key={game.id} game={game} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
