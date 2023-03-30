import { useState } from "react";
import data from "../MovieData.json";

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
      <div className="row">
        <div className="col-12 align-self-center text-start">
          <h3>Joel Hilton's Movie Collection</h3>
        </div>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
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
                <td>{m.Edited}</td>
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
