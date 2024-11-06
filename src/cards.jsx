import React from 'react';
// import img from './images/Italy.jpg';
export default function Cards(props){
    return(
        <div className="cardBody">
            <a href={props.link}>
        <img className="image" src={props.img} alt="italy"/>
        <h3 className="description">{props.description}</h3>
        </a>
        </div>
    );
}