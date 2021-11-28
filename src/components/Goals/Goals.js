import React from "react";
import GoalList from "./GoalList";

import "./Goals.css";

const Goals = (props) => {
    const deleteGoalFromList = (objectId) => {
        props.onDeleteGoalFromState(objectId);
    }
  return (
    <div className="goals">
      <GoalList items={props.items} onDeleteGoalFromList={deleteGoalFromList}/>
    </div>
  );
};

export default Goals;
