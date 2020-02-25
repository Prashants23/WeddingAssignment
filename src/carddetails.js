import React, {Component, match} from 'react'
// import ReactDOM from "react-dom";
import "./carddetails.css"

class CardDetails extends Component {
     

    constructor(props) {
      super(props)
      this.state = {
       id : '',
        user1:[],
      }
    }
  
    componentDidMount() {
     
      //  console.log("i am in component did mount", this.state.id);
      fetch(`https://jsonplaceholder.typicode.com/photos?id=${this.props.history.location.state.id}`)
        .then(response=> response.json())
        .then(user => { console.log(user,'prprrprpr');
          this.setState({ user1: user})});
      }


      // test()   
    
   test=()=>{
      console.log("ijnfjierbngiren",this.state.id)
    }
render(){
  console.log(this.props.history.location.state.id,'Hello');
    return (
      this.state.user1.length > 0 && 
      <div className="final">
        <h1>Description</h1>
        {/* <p>This is a test where id will be displayed</p> */}
        <div className="details card">
                <div>
                    <img alt="thumbnail" src={`${this.state.user1[0].thumbnailUrl}`}/>
                   
                </div>
                {/* <div>
                    id: {this.state.user1[0].id}
                 
                </div> */}
                <div>
                   <span className="title"> Title: </span><span className="title">{this.state.user1[0].title}</span>
                </div>
                {/* <h2>test this is a test</h2> */}
                </div>
    </div>
       
        // console.log("heelo this is match", Match)
      );
    
    }
}
export default CardDetails;

