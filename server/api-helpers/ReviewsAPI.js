// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/reviews.md
let axios = require('axios');

// let options = {
//   method: 'get',
//   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`,
//   headers: { "Authorization": process.env.API_TOKEN },
// };

module.exports.getReviews = (product_id, page = 1, count = 5, sort = 'newest') => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`,
    headers: { "Authorization": process.env.API_TOKEN },
    params: {
      product_id: product_id,
      page: page,
      sort: sort,
      count: count
    }
  };

  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}

module.exports.getMetadata = (product_id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/`,
    headers: { "Authorization": process.env.API_TOKEN },
    params: {
      product_id: product_id
    }
  };

  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}

module.exports.addReview = (data) => {
  const options = {
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`,
    headers: { "Authorization": process.env.API_TOKEN },
    data: data
  };

  return axios(options)
    .then(response => {
      console.log(`review post successful for ${options.data.product_id}`)
      console.log(`response data`, response.data)
      return response.data;
    })
    .catch(err => {
      console.log('error posting reviews:', err);
    })
}

module.exports.helpfulReview = (review_id) => {
  const options = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
    headers: { "Authorization": process.env.API_TOKEN },
    params: {
      review_id: review_id
    }
  };

  return axios(options)
    .then(response => {
      console.log(`review id ${review_id} marked as successful`)
      return response;
    })
    .catch(err => {
      console.log('error marking review as helpful:', err);
    })
}
