import React from "react";
import "./GoalItem.css";

const GoalItem = (props) => {
  const deleteHandler = (event) => {
    props.onDeleteGoal(props.dataKey);
  };

  return (
    <li onClick={deleteHandler} className="goal-item">
      <h2>{props.title}</h2>
    </li>
  );
};

export default GoalItem;
