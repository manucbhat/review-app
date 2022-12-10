import React from "react";

function Review(props) {
  return (
    <div className="review">
      <h1>{props.title}</h1>
      <p>{props.rating}</p>
      <p>{props.Description}</p>
      <button onClick={()=> props.onDelete(props.id)}>DELETE</button>
    </div>
  );
}

export default Review;