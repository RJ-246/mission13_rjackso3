import { useEffect, useState } from "react";
// import data from "./MovieData.json";
import { Movie } from "../types/movie";

// const jMovieData = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);
  //Limits the requests to the API
  useEffect(() => {
    //Gets all of the movies from the API and sets them to the list of movies
    const fetchMovies = async () => {
      const data = await fetch("https://localhost:4000/movie");
      const dataResults = await data.json();
      setListOfMovies(dataResults);
    };
    fetchMovies();
  }, []);

  // const addMovie = () => {
  //   setListOfMovies([
  //     ...jMovieData,
  //     {
  //       Category: "Comedy",
  //       Title: "Back to the Future Part III",
  //       Year: 1990,
  //       Director: "Robert Zemeckis",
  //       Rating: "PG",
  //     },
  //   ]);
  // };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {/* Makes a table row for each movie in the movie list */}
            {listOfMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}
export default MovieList;
