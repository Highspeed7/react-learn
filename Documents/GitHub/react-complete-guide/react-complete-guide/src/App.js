import React, { Component } from 'react';
import Persons from './Persons/Persons';
import Cockpit from './Cockpit/Cockpit';
import withClass from './WithClass/WithClass';
import * as classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1004, name: 'Max', age: 28 },
      { id: 1005, name: 'Manu', age: 29 },
      { id: 1006, name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <withClass classes={classes.App} >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </withClass>
      );
    }

    // let classes = ['red', 'bold'].join(' ');

    return (
      <div>
        {/* <p className={classes}> This is really working!</p> */}
        <Cockpit showPersons={this.state.showPersons} clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
}

export default App;
