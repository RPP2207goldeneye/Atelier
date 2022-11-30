import React from "react";
import { AnswerList } from "./AnswerList.jsx";
import { AddAnswer } from "./AddAnswer.jsx"


export const Question = (props) => {

  return (
    <div>
      <h3>Question Item to be mapped in list</h3>
      <AnswerList />
      <AddAnswer />
    </div>
  );
};