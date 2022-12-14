import React, {useState, useEffect} from 'react';
import {OverallReviewStars} from './OverallReviewStars.jsx';
import axios from 'axios';

export const AddReviewForm = ({ open, children, image, onClose, product, characteristics }) => {
  const [starState, setStarState] = useState(0);

  const [reviewBody, setReviewBody] = useState('');

  const [reviewObject, setReviewObject] = useState({product_id: 0, rating: starState, recommend: false, body: reviewBody});

  const [characteristicState, setCharacteristicState] = useState({});

  const [previewImages, setPreviewImages] = useState([]);

  const [imageURL, setImage] = useState([]);

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    height: '80%',
    width: '80%',
    zIndex: 1000
  }

  var characteristicsMap = [
    {
      name: 'Size',
      1: 'A size too small',
      2: '½ a size too small',
      3: 'Perfect',
      4: '½ a size too big',
      5: 'A size too wide'
    },
    {
      name: 'Width',
      1: 'Too narrow',
      2: 'Slightly narrow',
      3: 'Perfect',
      4: 'Slightly wide',
      5: 'Too wide',
    },
    {
      name: 'Comfort',
      1: 'Uncomfortable',
      2: 'Slightly uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect'
    },
    {
      name: 'Quality',
      1: 'Poor',
      2: 'Below average',
      3: 'What I expected',
      4: 'Pretty great',
      5: 'Perfect'
    },
    {
      name: 'Length',
      1: 'Runs Short',
      2: 'Runs slightly short',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    },
    {
      name: 'Fit',
      1: 'Runs tight',
      2: 'Runs slightly tight',
      3: 'Perfect',
      4: 'Runs slightly long',
      5: 'Runs long'
    }
  ];

  function onImageChange(e) {
    const MAX_UPLOAD_COUNT = 5
    if (Array.from(e.target.files).length > MAX_UPLOAD_COUNT) {
      e.preventDefault();
      alert(`Cannot upload more than ${MAX_UPLOAD_COUNT} files`);
      e.target.value = null;
      return;
    }

    var cloudinaryURLS = []
    console.log(e.target.files);
    const photos = e.target.files;

    for (let i = 0; i < photos.length; i++) {
      const data = new FormData()
      data.append("file", photos[i])
      data.append("upload_preset", "kuzmabr")
      axios.post("https://api.cloudinary.com/v1_1/dblteitfp/image/upload", data)
      .then(res => {
        console.log('cloudinary response OK', res.data.secure_url);
        // const tempPhotosArr = photos;
        cloudinaryURLS.push(res.data.secure_url);
        console.log(cloudinaryURLS);
      })
    }

    const tempArr = [];
    [...e.target.files].forEach(file => {
      // console.log("file:", file);

      tempArr.push(URL.createObjectURL(file));
    });
    setPreviewImages(tempArr);

    setImage(cloudinaryURLS);
  };

  function onChangeRecommend(event) {
    spreadReviewFunc('recommend', Boolean.parseBoolean(event.target.value));
  }

  function spreadReviewFunc(key, value) {
    setReviewObject(prevReviewObject => {
      return {
        ...prevReviewObject,
        [key]: value
      }
    })
  }

  function formSubmit() {
    axios.post('/addReview', reviewObject)
      .then((response) => {console.log('Add review response:',response.data)})
  }

  useEffect(() => {
    spreadReviewFunc('product_id', product.id)
  },[product]);

  useEffect(() => {
    spreadReviewFunc('characteristics', characteristicState)
  },[characteristicState]);

  useEffect(() => {
    spreadReviewFunc('rating', starState)
  },[starState]);

  useEffect(() => {
    spreadReviewFunc('body', reviewBody)
  },[reviewBody]);

  useEffect(() => {
    spreadReviewFunc('photos', imageURL)
  },[imageURL]);

  if (!open) return null

  return (
    <>
      <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>&#10006;</button>
        <br/>
        <form data-testid="add-review-form" widgetname="Reviews" onSubmit={formSubmit} >
          <h2>Write Your Review</h2>
          <h3>About the {product.name}</h3>
            Overall Rating*<br/>
            <OverallReviewStars starState={starState} setStarState={setStarState} /><br/>
            <div id="recommended" onChange={onChangeRecommend}>
                Recommended:
                <input id="yes-recommend-radio" widgetname="Reviews" type="radio" name="recommended" value="true" />
                Yes
                <input id="no-recommend-radio" widgetname="Reviews" type="radio" name="recommended" value="false" />
                No
                <br/>
            </div>
            {characteristicsMap.map((characteristic, index) => {
              characteristic.name = characteristic.name.charAt(0).toUpperCase() + characteristic.name.slice(1);
              if (characteristics[characteristic.name]) {
                return (
                  <div id={characteristic.name} key={index}>
                  {characteristic.name}:  {characteristicsMap[index][characteristicState[characteristics[characteristic.name].id]] || 'none selected'}<br/>
                  <input type="radio" name={characteristic.name} id={`1-${characteristic.name}-radio`} widgetname="Reviews" value="1" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 1; setCharacteristicState({...characteristicState})}} />1
                  <input type="radio" name={characteristic.name} id={`2-${characteristic.name}-radio`} widgetname="Reviews" value="2" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 2; setCharacteristicState({...characteristicState})}} />2
                  <input type="radio" name={characteristic.name} id={`3-${characteristic.name}-radio`} widgetname="Reviews" value="3" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 3; setCharacteristicState({...characteristicState})}} />3
                  <input type="radio" name={characteristic.name} id={`4-${characteristic.name}-radio`} widgetname="Reviews" value="4" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 4; setCharacteristicState({...characteristicState})}} />4
                  <input type="radio" name={characteristic.name} id={`5-${characteristic.name}-radio`} widgetname="Reviews" value="5" onClick={() => {characteristicState[characteristics[characteristic.name].id] = 5; setCharacteristicState({...characteristicState})}} />5
                  <br/>
                </div>
                )
              } else {
                return null;
              }
            })}
            <div>
            <label htmlFor="reviewSummary">Review Summary: </label>
            <input type="text" id="reviewSummary" name="reviewSummary" placeholder="Example: Best purchase ever!" required maxLength="60" size="65" onChange={e => spreadReviewFunc('summary', e.target.value)}></input><br/>

            <label>Review Body: </label>
            <textarea
              name="reviewBody"
              placeholder="Why did you like the product or not?"
              value={reviewBody}
              onChange={e => setReviewBody(e.target.value)}
              required
              minLength="50"
              maxLength="1000">
            </textarea><br/>
            {reviewBody.length < 50 ? `Minimum required characters left: ${50-reviewBody.length}` : 'Minimum reached'}<br/>
            <br/>
            { imageURL.length < 5 ? <><input type="file" multiple accept="image/*" onChange={onImageChange} ></input><br/></> : null}
            {previewImages.map((image, index) => {
              return (
              <div key={index} className="thumbnailDiv">
              <img id="target" src={image} alt="review image" className="reviewImage"/>
              </div>
            )})}
            <br/>
            <label htmlFor="username">Username: </label>
            <input type="text" onChange={e => spreadReviewFunc('name', e.target.value)} id="username" name="username" placeholder="Example: jackson11!" required maxLength="60" size="65"></input><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" onChange={e => spreadReviewFunc('email', e.target.value)} id="email" name="email" placeholder="Example: jackson11@email.com" required maxLength="60" size="65"></input><br/>
            For authentication reasons, you will not be emailed.
            <br/>
            <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
      </div>
    </>
  )
};