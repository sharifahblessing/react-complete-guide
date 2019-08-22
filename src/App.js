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

  onChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'Max',age:28},
        {name:event.target.value,age:26},
        {name:'Sharifah',age:27}
      ]
    })
  }

  togglePersonHandler =()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
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
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}> My hobby is:fun</Person>
      <Person  
      changed ={this.onChangeHandler}
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}>Boy you are destined to be great</Person>
      <Person
      click = {this.switchNameHandler.bind(this,"AbdulKareem")} 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
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
