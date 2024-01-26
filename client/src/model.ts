export interface GamePagination {
    data: GameItem[],
    page: number,
    total: number
}

export interface GameItem {
    id: number,
    startTime: string,
    private: boolean,
    teams: Team[],
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
    playerId: number,
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
    teamId: number,
    gameId: number,
    host: boolean,
    points: number,
    fouls: number,
    substitutionsLeft: boolean,
}
export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: boolean,
}