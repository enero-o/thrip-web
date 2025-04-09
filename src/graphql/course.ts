import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query GetCourses($query: CourseFilter) {
    getCourses(query: $query) {
      isOngoing
      _id
      status
      aim
      attendees
      payablePricing
      certificate {
        type
        duration
        gdcOutcomes
      }
      content {
        title
        lessons {
          title
          videoUrl
        }
      }
      currency
      dateTime
      deliveryType
      description
      duration
      joinUrl
      language
      meetingId
      mentorId
      objective
      outline
      pricing
      questions {
        id
        question
        options
        answer
      }
      mentor {
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
        phoneOtp
        phoneVerified
        verifiedAt
        googleRefreshToken
      }
      sponsors
      thumbnailUrl
      title
      type
      videoUrl
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($query: CourseFilter) {
    getCourse(query: $query) {
      _id
      mentor {
        type
        email
        firstName
        lastName
        imageUrl
      }
      title
      currency
      attendees
      duration
      description
      aim
      outline
      pricing
      payablePricing
      objective
      mentor {
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
        phoneOtp
        phoneVerified
        verifiedAt
        googleRefreshToken
      }
      dateTime
      thumbnailUrl
      videoUrl
      language
      certificate {
        gdcOutcomes
        duration
        type
      }
      content {
        lessons {
          title
          videoUrl
        }
        title
      }
      questions {
        id
        question
        options
        answer
      }
      sponsors
      type
      deliveryType
      meetingId
      joinUrl
    }
  }
`;
