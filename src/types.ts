export interface Mentor {
  address: string;
  bio: string;
  email: string;
  firstName: string;
  googleRefreshToken: string;
  imageUrl: string;
  lastName: string;
  phoneNumber: string;
  type: string;
  userId: string;
  verified: string;
  verifiedAt: string;
  expertise: ExpertiseItem[];
}

export interface CourseAssessment {
  mentorId: string;
  mentor?: any;
  _id: string;
}

export interface Questions {
  answer: string;
  id?: string;
  options: string[];
  question: string;
}

export interface Certificate {
  type: string;
  duration?: any;
  gdcOutcomes: string[];
}

export interface Content {
  title: string;
  lessons: {
    title: string;
    videoUrl: string;
  }[];
}

export interface GetCourse {
  attendees: string;
  isOngoing: boolean;
  _id: string;
  mentor: Mentor;
  assessment: CourseAssessment;
  currency: string;
  payablePricing: any;
  title: string;
  duration: number;
  description: string;
  aim: string;
  outline: string;
  pricing: number;
  status: string;
  objective: string[];
  dateTime: string;
  thumbnailUrl: string;
  videoUrl?: any;
  language: string;
  questions: Questions[];
  certificate: Certificate;
  content: Content[];
  type: string;
  deliveryType: string;
  meetingId: number;
  joinUrl: string;
  sponsors: string[];
}

export interface GetCoursesData {
  getCourses: GetCourse[];
}

export interface GetCourseData {
  getCourse: GetCourse;
}

export interface FaqsData {
  [key: string]: {
    question: string;
    answer: string;
  }[];
}

export interface MentorFilters {
  hourlyRate?: number | null;
  expertise?: string;
  language?: string;
  rateSortOrder?: "ASC" | "DESC" | "";
}
export interface ExpertiseItem {
  id?: string;
  name?: string;
  expertise?: string;
  years: number;
}
