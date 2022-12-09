import React, {useState, useEffect} from 'react';


export const RatingsBreakdown = (props) => {
  // var reviews = props.reviews;
  // console.log(reviews);

  const [ratingsObject, setRatings] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
    recommend: 0
  });

  useEffect(() => {
    var tempObj = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
      recommend: 0
    };
    props.reviews.forEach(review => {
      tempObj[review.rating]++;
      if (review.recommend) {
        tempObj.recommend++
      }
    })
    setRatings(tempObj);
  },[props.reviews])

  return (
    <div>
      <h4>{parseInt(Math.round((ratingsObject.recommend/props.reviews.length)*100))}% of reviews recommend this product</h4>
      <h4>
      5 Stars: {ratingsObject[5]}
      </h4>
      <h4>
      4 Stars: {ratingsObject[4]}
      </h4>
      <h4>
      3 Stars: {ratingsObject[3]}
      </h4>
      <h4>
      2 Stars: {ratingsObject[2]}
      </h4>
      <h4>
      1 Star: {ratingsObject[1]}
      </h4>
    </div>
  )
};