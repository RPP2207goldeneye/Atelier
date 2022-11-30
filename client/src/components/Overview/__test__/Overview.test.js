import Enzyme, { shallow, configure } from 'enzyme';
import { Overview } from '../../Overview.jsx';
import React, { useEffect, useState } from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// subcomponents
import StarsReviews from '../StarsReviews.jsx';
import ProductCategoryTitle from '../ProductCategoryTitle.jsx';
import Price from '../Price.jsx';
import ProductOverview from '../ProductOverview.jsx';
import ToggleOutfitStar from '../ToggleOutfitStar.jsx';
import StyleSelector from '../StyleSelector.jsx';
import SizeQuantity from '../StarsReviews.jsx';
import AddToCart from '../AddToCart.jsx';
import DefaultGallery from '../DefaultGallery.jsx';
import ExpandedGallery from '../ExpandedGallery.jsx';

configure({adapter: new Adapter()});

describe('Confirm initial load:', () => {
  it("SHALLOW: Renders parent Overview Widget without crashing", () => {
    shallow(<Overview />);
  });

  // check for 'mount' of the subcomponents
  it("Renders the Stars & Reviews subcomponent without crashing", () => {
    shallow(<StarsReviews />);
  });
  it("Renders the Product Category & Title subcomponent without crashing", () => {
    shallow(<ProductCategoryTitle />);
  });
  it("Renders the Price subcomponent without crashing", () => {
    shallow(<Price />);
  });
  it("Renders the Product Overview subcomponent without crashing", () => {
    shallow(<ProductOverview />);
  });
  it("Renders the Toggle the Outfit Star subcomponent without crashing", () => {
    shallow(<ToggleOutfitStar />);
  });
  it("Renders the Style Selector subcomponent without crashing", () => {
    shallow(<StyleSelector />);
  });
  it("Renders the Size & Quantity subcomponent without crashing", () => {
    shallow(<SizeQuantity />);
  });
  it("Renders the Add to Cart subcomponent without crashing", () => {
    shallow(<AddToCart />);
  });
  it("Renders the Default Gallery View subcomponent without crashing", () => {
    shallow(<DefaultGallery />);
  });
  it("Renders the Expanded Gallery View subcomponent without crashing", () => {
    shallow(<ExpandedGallery />);
  });
});


// IDEAS
// test for props
// test for state
