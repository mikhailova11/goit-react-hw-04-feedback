import React from "react";
import s from "./FeedbackOptions.module.css";


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={s.listBtn} >
           
           { options.map((option) => (
            <button key={option} className={s.button} type="button" onClick={()=>{onLeaveFeedback(option)}} >{option}</button>
           ))}
    </div>
    )
}

export default FeedbackOptions;
