import React, {Component} from 'react;'
import logo from './logo.svg';
import './App.css';
import Person from './js/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Guna", age: "16", id: 1},
      {name: "Max", age: "17", id: 2}
    ],
    showCopy: true
  }

  changeAge = (event, id) => {
    const personIndex = this.state.persons.findIndex(p = () => {
      return p.id === id;
    });

    const person = {
     ...this.state.persons[personIndex]
    };

    persons.age = event.target.value;
    const persons = {...this.state.persons};
    persons[personIndex] = person;
    this.setState(
      {perons: persons}
    );

    this.setState(
      {
        persons: [
          {name: "Guna", age: "16", id: 1},
          {name: "Max", age: event.target.value, id: 2}
        ]
      }
    );
  }

  render() {
    let person = null;

    if (this.state.showCopy) {
      person = (
        <div>
          {this.state.persons.map(persons = (person) => {
            return (
              <Person name = {persons.name} age = {persons.age} key = {persons.id} click = {() => this.changeAge(event, persons.id)}/>
            );
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick = {this.changeAge}>Change Age</button>
        <Person>This is text in between the elements</Person>
        <Person name = "Guna" age = "16" click = {() => this.changeAge()} >Hello there, this is the text inside the elements.</Person>
        <Person name = "Max" age = "18" click = {this.changeAge}>Hello there, this is the text inside the elements.</Person>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        {person}
      </div>
    );
  }
}

export default App;
