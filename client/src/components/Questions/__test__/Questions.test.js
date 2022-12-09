/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react";

// Questions components
import { Questions } from '../../Questions.jsx';
import { AddAnswer } from "../QuestionsComponents/AddAnswer.jsx";
import { AddQuestion } from "../QuestionsComponents/AddQuestion.jsx";
import { Answer } from "../QuestionsComponents/Answer.jsx";
import { AnswerList } from "../QuestionsComponents/AnswerList.jsx";
import { Question } from "../QuestionsComponents/Question.jsx";
import { QuestionsList } from "../QuestionsComponents/QuestionsList.jsx";
import { SearchQuestions } from "../QuestionsComponents/SearchQuestions.jsx";

import { productData } from "../../../../../dummyTestData/productData.js";

describe('Unit: Initial rendering of all Questions components', () => {


test("Renders QuestionsList Widget without crashing", ()=> {
  render(<Questions productNum={71700} product={productData}/>)
  const QCompElement = screen.getByText('Questions & Answers')
  expect(QCompElement).toBeInTheDocument()
})

// it("SHALLOW: renders AddAnswer Widget without crashing", ()=> {
//   shallow(<AddAnswer />);
// });

// it("SHALLOW: renders AddQuestion Widget without crashing", ()=> {
//   shallow(<AddQuestion />);
// });

// it("SHALLOW: renders Answer Widget without crashing", ()=> {
//   shallow(<Answer />);
// });

// it("SHALLOW: renders AnswerList Widget without crashing", ()=> {
//   shallow(<AnswerList />);
// });

// it("SHALLOW: renders Question Widget without crashing", ()=> {
//   shallow(<Question />);
// });

// it("SHALLOW: renders QuestionsList Widget without crashing", ()=> {
//   shallow(<QuestionsList />);
// });

// it("SHALLOW: renders SearchQuestions Widget without crashing", ()=> {
//   shallow(<SearchQuestions />);
// });

})