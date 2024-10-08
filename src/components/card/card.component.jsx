import {Component} from 'react';
import './card.styles.css'

class Card extends Component {
render ( ) {
    const {id, name, email} = this.props.member;
    return(
        <div className = 'card-container' key={id} >   
    <img 
    alt={`member ${name}`} 
    src={`https://robohash.org/${id}?set=set2&size=160x160`} 
    />
    <h2>{name}</h2>
    <p>{email}</p>
    </div>
    );
}}
    
export default Card;