/* eslint-disable react/prop-types */
import './movieRating.css';

export const MovieRating = ({ rating }) => {
    // console.log(rating);

  return (
    <div className='movieRating'>
            <i className="bi bi-star-fill"></i>
            <span>{rating.toFixed(1)}/10</span>
    </div>
  )
}
