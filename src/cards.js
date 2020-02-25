import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import './cards.css'
const Card = ({  id,title, thumbnailUrl,click}) => {
  // console.log(this.props,'propsssss')
  return (
    <div className="cards">
      {/* <Link to={`/shop/${id}`}> */}
      {/* onClick={()=>click(id, title)} */}
      <div className="img">
    <Link to={{
       pathname:`/photos/${id}`,
       state: {id:id}
      }} > <img alt='robots' src={thumbnailUrl} /></Link>
    </div>
    
    {/* <p>{id}</p> */}
      {/* </Link> */}
      {/* <div>
        <h2>{url}</h2>
       
      </div> */}
    </div>
  );
}

export default Card;