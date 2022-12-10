import React, { useState }  from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Review from "./components/Review";

function App(){
  const [review,setReview] = useState([]);

  function addReview(newReview){
    setReview(prevReview => {
      return [...prevReview, newReview];
    });
  }

  function deleteReview(id) {
    setReview(prevReview => {
      return prevReview.filter((ReviewItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
    <Header />
      <CreateArea onAdd={addReview}/>
      <div>
        <h1 className="header1">Reviews</h1>
    </div>
      {review.map((ReviewItem,index) =>{
        return(
          <Review
      key={index}
      id={index}
      title={ReviewItem.title}
      rating ={ReviewItem.rating}
      description = {ReviewItem.Description}
      onDelete = {deleteReview}
      />
        )
      })}
      
    </div>
  );
}

export default App;
