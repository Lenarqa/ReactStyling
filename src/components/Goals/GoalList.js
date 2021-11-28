import React from "react";
import GoalItem from "./GoalItem";
import "./GoalList";

const GoalList = (props) => {
  const deleteGoal = (objectId) => {
    props.onDeleteGoalFromList(objectId);
  };

  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <GoalItem key={goal.id} dataKey={goal.id} title={goal.goal} onDeleteGoal={deleteGoal} />
      ))}
    </ul>
  );
};

export default GoalList;
