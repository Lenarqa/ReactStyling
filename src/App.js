import React, { useState } from "react";
import NewGoal from "./components/NewGoal/NewGoal";
import Goals from "./components/Goals/Goals";

const INITIAL_GOALS = [
  {
    id: 1,
    goal: "reed 10 books",
  },
  {
    id: 2,
    goal: "buy nintendo",
  },
  {
    id: 3,
    goal: "finish react course",
  },
];

function App() {
  const [goals, setGoals] = useState(INITIAL_GOALS);

  const saveEnteredGoal = (enteredGoal) => {
    setGoals((prevState) => {
      return [enteredGoal, ...prevState];
    });
  };
  
  const deleteGoalFromState = (objectId) => {
    setGoals((prevState) => {
      return prevState.filter((goal) => {
        return goal.id !== objectId;
      });
    });
  }

  return (
    <div>
      <NewGoal onSaveEnteredGoal={saveEnteredGoal} />
      <Goals items={goals} onDeleteGoalFromState={deleteGoalFromState}/>
    </div>
  );
}

export default App;
