import Enzyme, {shallow, configure} from 'enzyme';
import React, { useEffect, useState } from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Questions } from '../../Questions.jsx';
import { AddAnswer } from "../QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "../QuestionsComponents/AddQuestion.jsx";
import { Answer } from "../QuestionsComponents/Answer.jsx";
import { AnswerList } from "../QuestionsComponents/AnswerList.jsx";
import { Question } from "../QuestionsComponents/Question.jsx";
import { QuestionsList } from "../QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "../QuestionsComponents/SearchQuestions.jsx";


configure({adapter: new Adapter()});


it("SHALLOW: renders Questions Widget without crashing", ()=> {
  shallow(<Questions />);
});

it("SHALLOW: renders AddAnswer Widget without crashing", ()=> {
  shallow(<AddAnswer />);
});

it("SHALLOW: renders AddQuestion Widget without crashing", ()=> {
  shallow(<AddQuestion />);
});

it("SHALLOW: renders Answer Widget without crashing", ()=> {
  shallow(<Answer />);
});

it("SHALLOW: renders AnswerList Widget without crashing", ()=> {
  shallow(<AnswerList />);
});

it("SHALLOW: renders Question Widget without crashing", ()=> {
  shallow(<Question />);
});

it("SHALLOW: renders QuestionsList Widget without crashing", ()=> {
  shallow(<QuestionsList />);
});

it("SHALLOW: renders SearchQuestions Widget without crashing", ()=> {
  shallow(<SearchQuestions />);
});

