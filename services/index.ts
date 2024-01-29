import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-sa-east-1.hygraph.com/v2/clrvcthhh0djb01te1056xc8x/master";
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
        carType
        carBrand
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(data: {
        userName: "${formValue.userName}",
        pickUpDate: "${formValue.pickUpDate}",
        pickUpTime: "${formValue.pickUpTime}",
        dropOffDate: "${formValue.dropOffDate}",
        dropOffTime: "${formValue.dropOffTime}",
        contactNumber: "${formValue.contactNumber}",
        carId: { connect: { id: "${formValue.carId}" } }
      }) {
        id
      }
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
