import React, { useState } from "react";


function CreateArea(props){
    const [review,setReview] =useState({
        title:"",
        rating:"",
        Description:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setReview(prevReview =>{
            return{
                ...prevReview,
                [name] : value
            };
        });
    }

    function submitReview(event){
        event.preventDefault()
        props.onAdd(review);    
    }

    function resetReview(){  
        setReview({
            title:"",
            rating:"",
            Description:""
        });
    }


    return(
        <div>
        <section className="review-1">
        <form onSubmit={submitReview} >
            <div>
                <label>Title</label>
                <input name="title" type="text" placeholder="Title for your review" onChange={handleChange} value={review.title} required />
            </div>
            <br />
            <div>
                <label>Rating</label>
                <input name="rating" type="number" min="0" max="5" onChange={handleChange} value={review.rating} required />
            </div>
            <br />
            <div>
                <label>Description</label>
                <textarea name="Description" type="text" maxLength="150" onChange={handleChange} value={review.Description} />
            </div>
            <br />
            <div className="btn">
                <button type='submit' className="btn1">Submit</button>
            </div>
            <br />
            <div className="btn">
                <button onClick={resetReview} className="btn2">reset</button>
            </div>
        </form>
</section>

        </div>
    );
}

export default CreateArea;