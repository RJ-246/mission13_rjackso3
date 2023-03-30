import { useState } from "react";
import data from "./MovieData.json";

const jMovieData = data.MovieData;
function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(jMovieData);
  const addMovie = () => {
    setListOfMovies([
      ...jMovieData,
      {
        Category: "Comedy",
        Title: "Back to the Future Part III",
        Year: 1990,
        Director: "Robert Zemeckis",
        Rating: "PG",
      },
    ]);
  };
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
            </tr>
          </thead>

          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}
export default MovieList;
