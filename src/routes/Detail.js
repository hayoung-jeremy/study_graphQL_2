import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_full
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(loading, data);
  return "Detail";
};

export default Detail;
