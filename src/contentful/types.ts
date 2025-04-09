import { Entry } from "contentful";

export interface ImageType {
  fields: { file: { url: string } };
}

export interface TestimonailsFields {
  contentTypeId: any;
  fields: {
    avatar: ImageType;
    firstName: string;
    lastName: string;
    location: string;
    comment: string;
    type: string;
    title: string;
  };
}

export interface Testimonial extends Entry<TestimonailsFields> {}

export interface MentorOfTheWeekFields {
  contentTypeId: any;
  fields: {
    image: ImageType;
    firstName: string;
    lastName: string;
    occupation: string;
    workLocation: string;
    country: string;
    areasOfExpertise: string[];
    about: string;
    profileLink: string;
  };
}

export interface MentorOfTheWeek extends Entry<MentorOfTheWeekFields> {}
export interface BeginMentorshipFields {
  contentTypeId: any;
  fields: {
    image: ImageType;
    header: string;
    paragraph: string;
  };
}

export interface BeginMentorship extends Entry<BeginMentorshipFields> {}
export interface FaqsFields {
  contentTypeId: any;
  fields: {
    unlockPotential: string;
    whatIsIntaglio: string;
    howDoesIntaglioWork: string;
    mentorEligibility: string;
    menteeEligibility: string;
    menteeBenefits: string;
    membershipCost: string;
    sessionAdjustment: string;
    externalCommunication: string;
    securityMeasures: string;
    contactIntaglio: string;
  };
}

export interface Faqs extends Entry<FaqsFields> {}
export interface BlogFields {
  contentTypeId: any;
  fields: {
    image: ImageType;
    header: string;
    description: string;
    firstName: string;
    lastName: string;
    date: string;
    externalLink: string;
  };
}

export interface BlogData extends Entry<BlogFields> {}

export interface BlogBannerFields {
  contentTypeId: any;
  fields: {
    image: ImageType;
  };
}

export interface BlogBanner extends Entry<BlogBannerFields> {}

export interface AboutUsHeaderFields {
  contentTypeId: any;
  fields: {
    aboutUs: string;
    image: ImageType;
  };
}

export interface AboutUsHeaderData extends Entry<AboutUsHeaderFields> {}

export interface CompanyOverviewFieds {
  contentTypeId: any;
  fields: {
    header: string;
    image: ImageType;
    paragraph: string;
    imagePlacement: "left" | "right";
  };
}

export interface CompanyOverviewData extends Entry<CompanyOverviewFieds> {}

export interface WhyMentorshipFields {
  contentTypeId: any;
  fields: {
    unlockPotential: string;
    learningCurve: string;
    network: string;
    navigate: string;
    growth: string;
    earning: string;
    reputation: string;
    investment: string;
  };
}

export interface WhyMentorshipData extends Entry<WhyMentorshipFields> {}
