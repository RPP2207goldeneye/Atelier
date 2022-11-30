import React, {useState, useEffect} from "react";
import { AddAnswer } from "./Questions/QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "./Questions/QuestionsComponents/AddQuestion.jsx";
import { Answer } from "./Questions/QuestionsComponents/Answer.jsx";
import { AnswerList } from "./Questions/QuestionsComponents/AnswerList.jsx";
import { Question } from "./Questions/QuestionsComponents/Question.jsx";
import { QuestionsList } from "./Questions/QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "./Questions/QuestionsComponents/SearchQuestions.jsx";


export const Questions = () => {

  return (
    <div>
      <h1>Questions Component</h1>
      <SearchQuestions />
      <QuestionsList />
      <AddQuestion />
    </div>
  );
};