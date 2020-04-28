import React from 'react';

import './Card.css'

import Play from '../img/play-button.svg'

function Card(props) {
    const { url, children } = props;
    return(
        <div className="Card">
            <div className="Header">
                <img src={url}></img>
                <div className="overlay">
                    <span>
                        <img src={Play}></img>
                    </span>
                </div>
            </div>
            <div className="footer">
                <p>{ children }</p>
            </div>
        </div>
    )
}

export default Card;

