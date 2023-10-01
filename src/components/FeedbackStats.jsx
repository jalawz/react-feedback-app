import PropTypes from "prop-types";

function FeedbackStats({ feedbacks }) {
  // Calculate ratings avg
  let average =
    feedbacks.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / feedbacks.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedbackStats;
