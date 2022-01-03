import React from "react";
import "../PersonCard/PersonCard.css";

const PersonCard = ({
  id,
  name,
  city,
  country,
  employer,
  title,
  favoriteMovies,
}) => {
  return (
    <article className="person-card">
      <h2 className="card-number">{id}/25</h2>
      <div className="person-card-content">
        <h2 className="person-card-title">
          {name.first} {name.last}
        </h2>

        <section className="person-details">
          <p className="detail">
            <span className="detail-title">From: </span> {city}, {country}
          </p>
          <p className="detail">
            <span className="detail-title">Job Title: </span> {title}
          </p>
          <p className="detail">
            <span className="detail-title">Employer: </span> {employer}
          </p>
        </section>

        <section className="person-fav-movies">
          <h2 className="fav-movies-header">Favorite Movies:</h2>
          <ol className="movie-list">
            {favoriteMovies.map((movie, index) => {
              return (
                <li className="movie-item" key={index}>
                  {movie}
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </article>
  );
};

export default PersonCard;
