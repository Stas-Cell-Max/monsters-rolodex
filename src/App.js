import { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      searchField: '', // searchField to track user input
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { members: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {

    const filteredMembers = this.state.members.filter((member)=>{
      return member.name.toLocaleLowerCase().includes(this.state.searchField);
     });
    return (
      <div className="App">
        <input className='search-box' 
        type='search' 
        placeholder='search members' 
        onChange={(event) => {

        const searchField = event.target.value.toLocaleLowerCase();
        
        this.setState(() => {
            return {searchField };
          } 
        );

        }} 
        />
        {filteredMembers.map((member) => {
          return (
            <div key={member.id}>
              <h1>{member.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
