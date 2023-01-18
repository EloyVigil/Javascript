import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

const people = [
  {"firstName":"Tetsuo", "lastName":"Akira", "age":20, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Wick", "age":40, "hairColor":"Black"},
  {"firstName":"Ichigo", "lastName":"Kurosaki", "age":18, "hairColor":"Orange"},
  {"firstName":"Naruto", "lastName":"Uzamaki", "age":17, "hairColor":"Yellow"}
]

function App() {
  return (
    <div className="App">
      {people.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })}
    </div>
  );
}

export default App;

