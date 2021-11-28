import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const inputChange = (event) => {
        setEnteredGoal(event.target.value);
    }

    const newGoalHandler = () => {
        const newGoal = {
            id: Math.random().toString(),
            goal: enteredGoal
        }
        props.onSaveEnteredGoal(newGoal);
        setEnteredGoal("");
    }

    return (
        <div className="new-goal">
            <h2>Course Goal</h2>
            <input type="text" onChange={inputChange} value={enteredGoal} />
            <button type="button" onClick={newGoalHandler}>Add Goal</button>
        </div>
    );
};

export default NewGoal;