import React, { Component, useRef } from 'react';
import './App.css';
import CardList from './cardList';
import { Router, Switch,
  Route,
  Link} from "react-router-dom";
  // import Home from "./home"
// import Scroll from "./Scroll"
import history from './history'
import CardDetails from "./carddetails"
import Scroll from './Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response=> response.json())
      .then(users => {this.setState({ users: users})});
      
      
  }
onclick=(title)=>{
  console.log(title)
  // console.log('check state',this.state.users);
  // console.log('check props',this.state.users.title);
}
  renderCardView(){
    const { users} = this.state;
     console.log(history,'uuu')
    return(
        <div className='tc'>
          
          <Router history={history}>
            {/* <Link to="/image">Click me to view Images</Link> */}
              <Switch>
                    <Route exact path="/photos">
                          <h1 className='f1'>Images</h1>
                         

                          <CardList user={this.state.users}/>
                          
                    </Route>
                    <Route path="/photos/:id" >
                         <CardDetails  history={history}/>  
                    </Route>
                </Switch>
            </Router>
            {/* <button onClick={this.onclick}>test</button> */}
       
        </div>
      );
  }

  render() {
    return(
      <div>
       { this.state.users.length <= 0 ? <h2>Loading...</h2>:this.renderCardView()} 
        
      </div>
           );
  }
}
export default App;