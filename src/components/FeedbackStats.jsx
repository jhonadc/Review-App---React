import Prototypes from 'prop-types';

function FeedbackStats({ feedback }) {
  //calculate rating avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, ''); //just one decimal, in case it is not int. takes 0 out of integer.

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.prototypes = {
  feedback: Prototypes.array.isRequired,
};

export default FeedbackStats;
