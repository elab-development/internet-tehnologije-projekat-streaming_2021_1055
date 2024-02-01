import React from 'react'
import { GameItem } from '../model'
import { useUserContext } from '../userContext'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
interface Props {
    game: GameItem
}

export default function GameCard(props: Props) {
    const { user } = useUserContext();
    const host = props.game.teams.find(t => t.host);
    const guest = props.game.teams.find(t => !t.host);
    return (
        <div className="card mb-2" >
            <div className="card-body text-center">
                <h6 className="card-subtitle mb-2 ">{format(props.game.startTime, 'HH:mm dd.MM.yyyy')}</h6>
                <h5 className="card-title">{`${host?.team.name} - ${guest?.team.name}`}</h5>
                <h3 className="card-title mb-2 ">{`${host?.points} - ${guest?.points}`}</h3>
                {
                    user && (
                        <Link to={'/game/' + props.game.id}>
                            <button className='btn btn-outline-secondary mx-2'>Details</button>
                        </Link>
                    )
                }
                {
                    (user || !props.game.private) && !props.game.finished && props.game.hasLink && (
                        <Link to={'/stream/' + props.game.id}>
                            <button className='btn btn-outline-secondary mx-2'>Stream</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
