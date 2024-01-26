import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router'
import { Game, GameItem, GamePagination, Team } from './model';
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

export function useLiveGames() {
    const [games, setGames] = useState<GameItem[]>([])
    useEffect(() => {
        axios.get('/api/games/active')
            .then(res => {
                setGames(res.data)
            })
            .catch((e) => {
                setGames([])
            })
    }, [])
    return games;
}

export function useGame() {
    const id = useParams().id;
    const [game, setGame] = useState<Game | undefined>(undefined)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!id) {
            return;
        }
        setLoading(true);
        axios.get('/api/games/' + id)
            .then(res => {
                setGame(res.data)
            })
            .catch(err => {

            }).finally(() => {
                setLoading(false);
            })
    }, [id])

    return {
        game, loading
    }
}
export function useStream() {
    const id = useParams().id;
    const [data, setData] = useState<any>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            return;
        }
        setLoading(true);
        axios.get('/api/games/' + id + '/stream')
            .then(res => {
                setData(res.data.link);
            })
            .catch(err => {

            }).finally(() => {
                setLoading(false);
            })
    }, [id])

    return {
        data, loading
    }
}