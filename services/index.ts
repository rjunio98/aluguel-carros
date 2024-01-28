import { gql, request } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        id
        carAvg
        createdAt
        name
        price
        publishedAt
        seat
        updatedAt
        image {
          url
        }
      }
    }
  `;

  const result = await request(
    "https://api-sa-east-1.hygraph.com/v2/clrvcthhh0djb01te1056xc8x/master",
    query
  );
  return result;
};
