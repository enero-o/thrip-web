import { gql } from "@apollo/client";

export const GET_MENTORS = gql`
  query GetMentors($query: UserQuery) {
    getMentors(query: $query) {
      data {
        _id
        userId
        type
        email
        firstName
        lastName
        imageUrl
        address
        rate
        bio
        bioSupport
        country
        professionalNo
        verified
        accountId
        customerId
        accountUpdated
        phoneOtp
        phoneVerified
        kycVerified
        kycSessionId
        kycSessionExpiresAt
        phoneNumber
        verifiedAt
        hasCard
        hasService
        coC
        confAgreement
        googleRefreshToken
        subscriptionPlan
        zoneinfo
      }
      totalDocuments
    }
  }
`;

export const GET_EXPERTISE = gql`
  query GetExpertise($query: ExpertiseFilter) {
    getExpertise(query: $query) {
      _id
      expertise
      years
    }
  }
`;

export const GET_MENTOR_BY_ID = gql`
  query getMentorById($userId: String) {
    getMentorById(userId: $userId) {
      userId
      type
      email
      firstName
      lastName
      phoneNumber
      imageUrl
      address
      bio
      verified
      verifiedAt
      googleRefreshToken
    }
  }
`;
