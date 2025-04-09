import { gql } from "@apollo/client";

export const GET_MENTOR_SERVICES = gql`
  query getMentorServices($input: MentorServiceQuery) {
    getMentorServices(query: $input) {
      data {
        rate
        slots
        _id
        payableRate
        service {
          title
          description
        }
      }
    }
  }
`;
