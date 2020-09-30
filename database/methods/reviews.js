const ReviewModel = require('../models/reviews.js');
const counterMethods = require('./counter.js');

module.exports.addReview = async (review) => {
  const counter = await counterMethods.incrementReviewSeq();
  // eslint-disable-next-line no-param-reassign
  review.review_id = (counter) ? counter.seq + 1 : 1;
  return new Promise((resolve, reject) => {
    ReviewModel.create(review, async (err, data) => {
      if (err) {
        await counterMethods.decrementReviewSeq();
        reject(err);
      }
      resolve(data);
    });
  });
};
