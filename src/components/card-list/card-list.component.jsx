import { Component } from "react";


class CardList extends Component {

    render () {
const {members} = this.props;

        return <div>
            {members.map((member) => (
            <h1 key={member.id} > {member.name}</h1>
            )
            )}
            </div>
    }
}
export default CardList;



