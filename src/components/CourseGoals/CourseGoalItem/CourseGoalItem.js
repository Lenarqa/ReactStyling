import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
    </div>
  );
};

export default CourseGoalItem;
