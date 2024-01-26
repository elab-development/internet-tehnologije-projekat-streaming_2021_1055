export interface GamePagination {
    data: GameItem[],
    page: number,
    total: number
}

export interface GameItem {
    id: number,
    startTime: string,
    private: boolean,
    finished: boolean,
    teams: TeamStatistics[],
}

export interface Game extends GameItem {
    link?: string,
    players: PlayerStatistics
}

export interface Player {
    id: number,
    firstName: string,
    lastName: string,
    shirtNo: number,
    position: number,
    teamId: number,
}

export interface PlayerStatistics {
    id: number,
    fouls: number,
    points: number,
    player: Player,
    gameId: number,
    assists: number,
    rebounds: number,
}
export interface Team {
    id: number,
    name: string,
    address: string,
    players: Team[],
}

export interface TeamStatistics {
    id: number,
    team: {
        id: number,
        name: string
    }
    host: boolean,
    points: number,
    fouls: number,
    substitutionsLeft: boolean,
}
export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
}
export interface LoginUser {
    email: string,
    password: string,
}

export interface RegisterUser extends LoginUser {
    firstName: string,
    lastName: string,
}