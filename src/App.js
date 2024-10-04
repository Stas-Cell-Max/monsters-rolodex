import {Component} from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: {firstName: 'Maxter' , lastName: 'Moro'},
      city: 'Toronto'
    };
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hi {this.state.name.firstName} {this.state.name.lastName}, we live in {this.state.city}
        </p>
        <button
         onClick={() => {
          this.setState((state, props) => { 
            return {
            name: {firstName:'Stasic', lastName: 'Morozan'},
          };
          },
        () => {

        }
        );
          
        }}>
        Change the Name
        </button>
      </header>
    </div>
  );
}
}

export default App;
