import React from 'react';
import './eventTable.css';
import Modal from '../modal/modal';
 

export default function MatchItem({match}) {
    
    return (<li>
                <span>{match.id} {match.title} </span>  
                <Modal title={match.title} index={match.id} />
           </li>);
}