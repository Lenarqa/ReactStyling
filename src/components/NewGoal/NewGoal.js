import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
    return (
        <div className="new-goal">
            <h2>Course Goal</h2>
            <input type="text" />
            <button type="button">Add Goal</button>
        </div>
    );
};

export default NewGoal;