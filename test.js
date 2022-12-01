require('dotenv').config();

const getReviews = require('./client/src/api-docs/ReviewsAPI.js').getReviews;
const getMetadata = require('./client/src/api-docs/ReviewsAPI.js').getMetadata;
// const ProductsGet = require('./client/src/api-docs/ProductsAPI.js').ProductsGet;

// console.log(getMetadata(71697))
getMetadata(71697)
  .then(response => console.log(response))

// // console.log(getReviews(71697))
// getReviews(71697, 1, 5, 'relevant')
//   .then(response => console.log(response))

// console.log(ProductsGet())
// ProductsGet()
//   .then(data => console.log(data));