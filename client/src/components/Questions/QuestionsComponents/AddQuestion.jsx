import React, {useState} from "react";
import Modal from "react-modal";
import axios from "axios";

export const AddQuestion = (props) => {

  const [modalToggle, setQModalToggle] = useState(false);
  const [question, setQuestion] = useState('')
  const [nickname, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setQuestionError] =useState(false);

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    if(question.length == 0 || nickname.length == 0 || email.length == 0) {
      setQuestionError(true)
      console.log('here is error', error)
    } else {
      const formInfo= {
        question: question,
        nickname: nickname,
        email: email,
        productNum: props.productNum
      }
      axios.post('/qa/questions',{
        formInfo
      })
      .then((data)=>{console.log(data.data)
        alert('Question posted!')
        handleCloseClick()
      })
    }
  };

  const handleQuestionModalOpenClick = () => {
    setQModalToggle(true);
  };


  const handleCloseClick = () => {
    setQModalToggle(false);
  };

  return (
    <div>

      <button onClick={handleQuestionModalOpenClick}>Add A Question</button>
      <Modal
        isOpen={modalToggle}
        onRequestClose={handleCloseClick}
        ariaHideApp={false}
      >

        <h1>Ask Your Question</h1>
        <h2>about: {props.product.name}</h2>
        <form onSubmit={handleQuestionSubmit}>
          Your Question * <input size={1000} name="question" type="text" onChange={event=>setQuestion(event.target.value)} placeholder={"Why did you like the product or not?"}/>
          <div>
          {error && question.length=== 0 && <p>Question must be entered</p>}
          </div>

          What is your nickname * <input size={60} name="nickname" type="text" onChange={event=>setNickName(event.target.value)} placeholder={"Example: jackson11!"}/>
          <p>“For privacy reasons, do not use your full name or email address”</p>
          <div>
          {error && nickname.length === 0 && <p>Nickname must be entered</p>}
          </div>

          Your Email * <input size={60} name="email" type="email" onChange={event=>setEmail(event.target.value)} placeholder={"Example: TSwiftyFan32@hotmail.com"}/>
          <p>“For authentication reasons, you will not be emailed”</p>
          <div>
          {error && email.length === 0 && <p>email must be entered</p>}
          </div>

          <button>Submit Question</button>
        </form>
      </Modal>
    </div>
  );
}




