import React from 'react'
import './eventTable.css';
import MatchItem from './matchItem'

export default function EventTable(props) {
    return (
        <ul>
            {props.matches.map((match) => {
                return <MatchItem match={match} key={match.id}/>            
            })}
        </ul>
    )
}