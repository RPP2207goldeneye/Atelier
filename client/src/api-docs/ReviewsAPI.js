// Quick Link to this API Doc: https://learn-2.galvanize.com/cohorts/3414/blocks/94/content_files/Front%20End%20Capstone/project-atelier/reviews.md

let axios = require('axios');

let options = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`,
  headers: { "Authorization": process.env.API_TOKEN },
};

module.exports.getReviews = (product_id, page = 1, count = 5, sort = 'newest') => {
  options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;
  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}


module.exports.getMetadata = (product_id) => {
  options.url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=${product_id}`;
  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('error getting reviews:', err);
    })
}