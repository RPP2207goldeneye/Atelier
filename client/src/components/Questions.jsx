import React, {useState, useEffect} from "react";
import axios from 'axios';

import { AddAnswer } from "./Questions/QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "./Questions/QuestionsComponents/AddQuestion.jsx";
import { Answer } from "./Questions/QuestionsComponents/Answer.jsx";
import { AnswerList } from "./Questions/QuestionsComponents/AnswerList.jsx";
import { Question } from "./Questions/QuestionsComponents/Question.jsx";
import { QuestionsList } from "./Questions/QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "./Questions/QuestionsComponents/SearchQuestions.jsx";


export const Questions = (props) => {


  const [returnedQs, setQs] = useState([]);
  const [searchQ, setSearch] =useState('');


  useEffect(() => {
    axios.get('/qa/questions',{
      params:{productNum: props.productNum}
    })
    .then((data)=>{setQs(data.data.results)})
  },[]);

  return (
    <div data-testid="Questions Component">
      <h1>Questions</h1>
      <SearchQuestions setSearch={setSearch} />

      {returnedQs.length > 0 && <QuestionsList productNum={props.productNum} product={props.product} returnedQs={returnedQs} searchQ={searchQ}/>}
      <AddQuestion product={props.product} productNum={props.productNum}/>
    </div>
  )
};