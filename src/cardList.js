import React from 'react';
import Card from './cards';
import {BrowserRouter as Router, Switch,
    Route,
    Link} from "react-router-dom";
import CardDetails from "./carddetails"
const CardList = ({ user }) => {
    // console.log(user,'premss');
    
  return (
    <div>
      {
        user && user.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              title={user.title}
              thumbnailUrl={user.thumbnailUrl}
              // user = {user}
              // click={click}
              />
          );
        })
      }
    </div>
  );
}

// const click = (id, title, url) => {
//    return(      
//    <CardDetails id={id} title={title} url={url}/>
//   //  <Router>
//   //    <Route exact path="/image/:id">
//   //    <CardDetails id={id} title={title} url={url}/>
//   //  </Route>
//   //  </Router>
//    )
// }
export default CardList;