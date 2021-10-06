import React from "react";
import { gql, useQuery } from "@apollo/client";

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
  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return (
      <ul>
        {data.movies.map((m) => (
          <li key={m.id}>{m.medium_cover_image}</li>
        ))}
      </ul>
    );
  }
  return <h1>Home</h1>;
};

export default Home;