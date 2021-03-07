import React from 'react';
import './eventTable.css';

 

export default function MatchItem({match}) {
    
    return (<li>
                <span>{match.id} {match.title} </span>  
           </li>);
}