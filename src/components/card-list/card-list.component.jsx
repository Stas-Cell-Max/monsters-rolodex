import { Component } from 'react';
import './card-list.styles.css';


class CardList extends Component {

    render () {
        const {members} = this.props;

        return (
        <div className = 'card-list' > 
            {members.map((member) => (
            <div className= 'card-container' key={member.id} > 
            <img alt={`member ${member.name}`} src={`https://robohash.org/${member.id}?set=set2&size=160x160`} />
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            
            {member.name}
            </div>
            ))}
        </div>
        );
    }
}
export default CardList;



