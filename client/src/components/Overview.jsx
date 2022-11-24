import React, { useState, useEffect } from 'react';
import StarsReviews from './Overview/StarsReviews.jsx';
import ProductCategoryTitle from './Overview/ProductCategoryTitle.jsx';
import Price from './Overview/Price.jsx';
import ProductOverview from './Overview/ProductOverview.jsx';
import ToggleOutfitStar from './Overview/ToggleOutfitStar.jsx';
import StyleSelector from './Overview/StyleSelector.jsx';
import SizeQuantity from './Overview/StarsReviews.jsx';
import AddToCart from './Overview/AddToCart.jsx';
import DefaultGallery from './Overview/DefaultGallery.jsx';
import ExpandedGallery from './Overview/ExpandedGallery.jsx';

export const Overview = (props) => {
  console.log('props for overview: ', props)

  return (
    <div>
      <h1>Overview Component</h1>
      <div>
        <StarsReviews />
        <ProductCategoryTitle />
        <Price />
        <ProductOverview />
        <ToggleOutfitStar />
        <StyleSelector />
        <SizeQuantity />
        <AddToCart />
        <DefaultGallery />
        <ExpandedGallery />
      </div>
    </div>
  );
}

