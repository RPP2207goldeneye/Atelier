import React, {useState, useEffect} from "react";
import { Answer } from "./Answer.jsx";
import axios from 'axios';

export const AnswerList = (props) => {
  // console.log('here are questionID props', props.questionId);

  const [returnedAs, setAs] = useState([]);

  useEffect(() => {
    axios.get('/answers',{
      params:{questionId: props.questionId}
    })
    .then((data)=>{setAs(data.data.results)})
  },[]);

  const [moreAs, addAs] = useState(2);

  const handleMoreAsClick = () => {
  var currentANum = moreAs;
  currentANum = returnedAs.length;
  addAs(currentANum);
}

const resetAlist = () => {
  var currentANum = 2;
  addAs(currentANum);
}

  return (
    <div className="answersList" data-testid="AnswerList">
      {/* <h3>Answers</h3> */}
      {returnedAs.slice(0, moreAs)?.map((answerData, idx)=> <Answer answerData={answerData} key={idx} setAs={setAs} questionId={props.questionId}/>)}

      {moreAs <= returnedAs.length-1 && <button onClick={handleMoreAsClick}>Load More Answers</button> || returnedAs.length > 2 &&  <button onClick={resetAlist}>Collapse Answers</button>}


    </div>
  );
};