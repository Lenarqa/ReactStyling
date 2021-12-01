import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? "red" : "black" };
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc ${props => props.invalid ? 'red' : "#ccc"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;
    background: ${props => props.invalid ? "salmon" : "transparent"};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: salmon;
  }

  &.invalid {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'}> */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
