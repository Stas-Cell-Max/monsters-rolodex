import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';


class CardList extends Component {

    render () {
        const {members} = this.props;
        return (
            <div className="card-list">
            {members.map((member) => {
                return (
              <Card member={member} />
                );
    })}
          </div>
        );
    }
}
export default CardList;



