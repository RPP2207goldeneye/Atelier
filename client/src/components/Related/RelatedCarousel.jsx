import React, { useState, useEffect } from "react";
import RelatedProductCard from './RelatedProductCard.jsx'
import ComparisonModal from './ComparisonModal.jsx'


const RelatedCarousel = (props) => {
  var relatedProducts = props.related

  const [leftOffset, setLeftOffset] = useState(0)



  return (
    <>
      <div>
        <button onClick={() => {setLeftOffset(leftOffset - 265)}}>Next</button>
      </div>
      <div className="overflow-window">
        <div className="related-carousel-container" style={{marginLeft: `${leftOffset}px`}}>
          {relatedProducts.map((item, index) => {
            return (
              <RelatedProductCard cardInfo={item} key={index} productNum={props.productNum} setProductNum={(newNum) => {props.setProductNum(newNum)}}/>
            )
          })}
        </div>
      </div>
      <div>
        <button onClick={() => {setLeftOffset(leftOffset + 265)}}>Back</button>
      </div>
    </>
  )
}

export default RelatedCarousel;