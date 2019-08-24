import React ,{Component} from 'react';
import './App.css';
import Person from './person/person'

class App extends Component {

  // let age = Math.floor(Math.random()*30);
  state ={
    persons:[
      {name:'Max',age:28},
      {name:'Sharif',age:26},
      {name:'Sharifah',age:23}
    ],
    showPersons:false
  }

  switchNameHandler = (newName) =>{
    // console.log('was clicked!')
    this.setState({
      persons:[
        {name:newName,age:28},
        {name:'Sharif',age:26},
        {name:'Sharifah',age:27}
      ]
    })
  }

nameChangeHandler=(event,id)=>{
  const personIndex = this.state.persons.findIndex(person=>{
    return person.id === id;
  })

  const person ={
    ...this.state.persons[personIndex]
  }

  person.name= event.target.value;

  const persons =[...this.state.persons]
  persons[personIndex] = person;

    this.setState( {persons:persons})
  }


  togglePersonHandler =()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler =(personIndex)=>{
    console.log("i want to delete a person")
    const persons =[...this.state.persons];
    persons.splice(personIndex ,1)
    this.setState({persons:persons})
  }
  
  render(){
    //In-line style
    const style ={
     backgroundColor:'white',
     font:'inherit',
     border: '1px solid blue',
     padding:'8px',
     cursor:'pointer'
    }

  

  let persons = null;

  if(this.state.showPersons){
    persons =(
      <div>
      {this.state.persons.map((person,index)=>{
        return <Person
          deletePerson={this.deletePersonHandler.bind(this,"index")} 
         name={person.name}
          age={person.age}
          key={person.id}
          changed={this.nameChangeHandler}

          />
      })}
      </div>
    )
  }
  
  
  return (
    <div className="App">
      <h1>This is  React</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Switch Name</button>
      {persons}
    </div>
  )}
}

export default App;
