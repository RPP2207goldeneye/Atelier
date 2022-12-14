import React, { useState, useEffect } from "react";
import RelatedCarousel from "../components/Related/RelatedCarousel.jsx"
import YourOutfit from "../components/Related/YourOutfit.jsx"
import ComparisonModal from "./Related/ComparisonModal.jsx"

export const Related = (props) => {

  return (
    <div data-testid="related">
      <div className="realted-items-component-container">
      <RelatedCarousel styles={props.styles} product={props.product} related={props.related} productNum={props.productNum} setProductNum={(newNum) => {props.setProductNum(newNum)}}/>
      </div>
      <div className="your-outfit-component-container">
      <YourOutfit productNum={props.productNum} yourOutfit={props.yourOutfit} changeOutfit={(arr) => {props.changeOutfit(arr)}}/>
      </div>
    </div>
  );
};

