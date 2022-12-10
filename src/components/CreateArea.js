import React from "react";
import Button from "./Button";

function CreateArea(){
    return(
        <div>
        <section>
        <form>
            <div>
                <label>Title</label>
                <input type="text" placeHolder="Title for your review" required />
            </div>
            <br />
            <div>
                <label>Rating</label>
                <input type="number" min="0" max="5" required />
            </div>
            <br />
            <div>
                <label>Description</label>
                <textarea type="text" maxLength="150" />
            </div>
            <br />
            <div>
                <Button name="Submit" />
            </div>
            <br />
            <div>
                <Button name="reset" />
            </div>
        </form>
</section>
<section>
    <div>
        <h1>Reviews</h1>
    </div>
</section>
        </div>
    );
}

export default CreateArea;