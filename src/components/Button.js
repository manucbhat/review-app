import React from "react";

function Button(props){
    console.log(props);
    return(
    <div>
<button {...props}>{props.name}</button>
    </div>
    );
}

export default Button;