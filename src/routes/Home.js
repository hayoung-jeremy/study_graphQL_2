import React from "react";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && data.movies && (
        <ul>
          {data.movies.map((m) => (
            <Movie key={m.id} id={m.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
