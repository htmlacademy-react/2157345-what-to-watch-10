import React, { SyntheticEvent } from 'react';
import Star from './star';
import { MAX_RATING_FILM } from '../../const';
import { AddReviewObj } from '../../types/types';

type FilmRatingProp = {
    formData: AddReviewObj,
    changeFormRating: (event: SyntheticEvent)=>void
}

function FilmRating({changeFormRating, formData}: FilmRatingProp):JSX.Element {
  const arrayStars = [...new Array(MAX_RATING_FILM)].map((value, index) => index + 1).sort((a, b) => b - a);
  const curentRating = formData.rating;
  return (
    <div className="rating">
      <div className="rating__stars">
        {arrayStars.map((value)=>(<Star key={`star${value}`} value={value} changeFormRating={changeFormRating} checked={value.toString() === curentRating.toString()} />))}
      </div>
    </div>
  );
}

export default FilmRating;
