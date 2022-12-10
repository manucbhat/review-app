import React from "react";

function Review(props) {
  return (
    <div className="review">
    <section className="review-2">
    <div><h1 className="header2">Title: {props.title}</h1>
      <p className="para1">Rating: {props.rating}/5</p>
      <p className="para2">{props.Description}</p>
      <button onClick={()=> props.onDelete(props.id)} className="deletebtn">DELETE</button></div>

</section>
      
    </div>
  );
}

export default Review;