import React, { useState } from "react";

//TourCard renders individual gallery details
function TourCard({ id, name, price, info, image, onRemove }) {
    const [readMore, setReadMore] = useState(false); //local state to toggle Reac More / Show Less

    return (
        <article className="tour-card">
            <h3>{name}</h3>         
            <h4>${price}</h4> 
            <p>
                {readMore ? info : `${info.substring(0, 150)}...`}
            </p>
                <button className="read-btn" onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
                </button>
            {/*Button to remove the tour*/}
            <button className="btn-remove" onClick={()=>{
                onRemove(id)
            }}>Not Interested</button>
        </article>
    )
 }

 export default TourCard;