import { useEffect, useState } from 'react';
import { useLocation } from 'react-router'
import { GamePagination, Team } from './model';
import axios from 'axios';


export function useGamesSearch() {
    const location = useLocation();
    const [games, setGames] = useState<GamePagination | undefined>(undefined)

    useEffect(() => {
        axios
            .get('/api/games' + location.search)
            .then(res => {
                setGames(res.data)
            })
            .catch(err => {
                setGames(undefined);
            })
    }, [location.search])


    return games;

}

export function useTeams() {
    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        axios.get('/api/teams')
            .then(res => {
                setTeams(res.data)
            })
            .catch((e) => {
                setTeams([])
            })
    }, [])

    return teams;
}