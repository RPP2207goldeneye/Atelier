import React, {useState} from "react";
import { Question } from "./Question.jsx";

export const QuestionsList = () => {

  return (
    <div style={{color: 'blue'}}>
      <h2>Questions List</h2>
      <Question />
    </div>
  );
};