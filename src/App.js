import { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component'

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
          
        )
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
        return {searchField };
      });
    } 

  render() {

    const { members, searchField,} = this.state;
    const {onSearchChange} = this;
    const filteredMembers = members.filter((member)=>{
      return member.name.toLocaleLowerCase().includes(searchField);
     });
    return (
      <div className="App">
        <input className='search-box' 
        type='search' 
        placeholder='search members' 
        onChange={onSearchChange}
        
        
        
        />
          { /*filteredMembers.map((member) => {
          return (
            <div key={member.id}>
              <h1>{member.name}</h1>
            </div>
          );
        })
        */}
        <CardList members={filteredMembers} />
      </div>
    );
  }
}

export default App;
