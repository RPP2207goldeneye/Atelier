import React, {useState} from "react";
import { format, parseISO } from 'date-fns';
import axios from "axios";


export const Answer = (props) => {

  const answer_id = props.answerData.answer_id

  const [sentAHelpful, setAHelpful] = useState(false);
  const [sentReport, setReported] = useState(false);

  const handleAHelpfulness = () => {
    if (sentAHelpful === false) {
      axios.put('/answers/helpful', {
        answer_id
      }).then(()=> {
        axios.get('/answers',{
          params:{questionId: props.questionId}
        })
        .then((data)=>{props.setAs(data.data.results)})
        setAHelpful(true);
        })
    }
  }

  const handleReport = () => {
    if (sentReport === false) {
      axios.put('/answers/report', {
        answer_id
      }).then(()=>{setReported(true)})
    }
  };



  return (
    <div data-testid="Answer">
      <p>A: {props.answerData.body}</p>
      <p>by: {props.answerData.answerer_name}</p>
      <p>Helpful? <button onClick={handleAHelpfulness}>Yes</button>{props.answerData.helpfulness}</p>
      {!sentReport && <button onClick={handleReport}>Report</button>}
      {sentReport && <p style={{ color: 'red' }}>REPORTED</p>}
      <p>
      {/* {format ( new Date(), 'do MMMM Y')} */}
      {format(new Date(props.answerData.date), 'LLLL dd, yyyy')}
      {}
      </p>

    </div>
  );
};


