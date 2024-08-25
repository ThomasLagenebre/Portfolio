/**
 * Truncates a review to a specified maximum length and appends ellipsis if truncated.
 *
 * @param {string} review - The review text that needs to be shortened.
 * @param {number} maxLength - The maximum length of the shortened review.
 * @returns {string} - The shortened review, with an ellipsis ("...") appended if it was truncated.
 *
 * @example
 * // Returns "This movie was a..."
 * cutReview("This movie was amazing!", 15);
 *
 * @example
 * // Returns "Great story!"
 * cutReview("Great story!", 20);
 */
export const cutReview = (review: string, maxLength: number) => {
    const cutReview = review.substring(0, maxLength);

    if(review.length > maxLength){
      return cutReview + "...";
    } else {
      return review
    }
  }