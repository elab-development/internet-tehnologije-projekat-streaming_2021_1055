import React from 'react'
import { PlayerStatistics, TeamStatistics } from '../model'


interface Props {
    teamStatistics: TeamStatistics,
    playersStatistics: PlayerStatistics[]
}

export default function TeamOverview(props: Props) {
    return (
        <div className='px-3 pt-3'>
            <h2 className='text-center'>{props.teamStatistics.team.name}</h2>
            <div className='py-4' >
                <div className='flex'>
                    <h6>
                        Fouls
                    </h6>
                    <h6>
                        {props.teamStatistics.fouls}
                    </h6>
                </div>
                <div className='flex'>
                    <h6>
                        Substitutions left
                    </h6>
                    <h6>
                        {props.teamStatistics.substitutionsLeft}
                    </h6>
                </div>
            </div>
            <h3>
                Player statistics
            </h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Points</th>
                        <th>Rebounds</th>
                        <th>Assists</th>
                        <th>Fouls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.playersStatistics.map(playerStatistics => {
                            return (
                                <tr key={playerStatistics.id}>
                                    <td>
                                        {`${playerStatistics.player.firstName} ${playerStatistics.player.lastName} - ${playerStatistics.player.position}`}
                                    </td>
                                    <td>
                                        {playerStatistics.points}
                                    </td>
                                    <td>
                                        {playerStatistics.rebounds}
                                    </td>
                                    <td>
                                        {playerStatistics.assists}
                                    </td>
                                    <td>
                                        {playerStatistics.fouls}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
