import { createClient } from "contentful";
import {
  Testimonial,
  TestimonailsFields,
  MentorOfTheWeek,
  MentorOfTheWeekFields,
  BeginMentorship,
  BeginMentorshipFields,
  Faqs,
  FaqsFields,
  BlogFields,
  BlogData,
  BlogBannerFields,
  BlogBanner,
  AboutUsHeaderData,
  AboutUsHeaderFields,
  CompanyOverviewData,
  CompanyOverviewFieds,
  WhyMentorshipData,
  WhyMentorshipFields,
} from "./types";
import config from "@thrip/config";

const client = createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN,
});

const getTestimonials = async (): Promise<Testimonial[]> => {
  const response = await client.getEntries<TestimonailsFields>({
    content_type: "testimonials",
  });
  return response.items;
};

const getMentorOfTheWeek = async (): Promise<MentorOfTheWeek[]> => {
  const response = await client.getEntries<MentorOfTheWeekFields>({
    content_type: "mentorOfTheWeek",
  });
  return response.items;
};

const getBeginMentorship = async (): Promise<BeginMentorship[]> => {
  const response = await client.getEntries<BeginMentorshipFields>({
    content_type: "beginMentorship",
  });
  return response.items;
};

const getFaqs = async (): Promise<Faqs[]> => {
  const response = await client.getEntries<FaqsFields>({
    content_type: "faqs",
  });
  return response.items;
};

const getBlog = async (): Promise<BlogData[]> => {
  const response = await client.getEntries<BlogFields>({
    content_type: "blog",
  });
  return response.items;
};

const getBlogBanner = async (): Promise<BlogBanner[]> => {
  const response = await client.getEntries<BlogBannerFields>({
    content_type: "blogBanner",
  });
  return response.items;
};

const getAboutUsHeader = async (): Promise<AboutUsHeaderData[]> => {
  const response = await client.getEntries<AboutUsHeaderFields>({
    content_type: "aboutUsHeader",
  });
  return response.items;
};

const getCompanyOverview = async (): Promise<CompanyOverviewData[]> => {
  const response = await client.getEntries<CompanyOverviewFieds>({
    content_type: "companyOverview",
  });
  return response.items;
};

const getWhyMentorship = async (): Promise<WhyMentorshipData[]> => {
  const response = await client.getEntries<WhyMentorshipFields>({
    content_type: "whyMentorship",
  });
  return response.items;
};

const getHeaderImages = async (): Promise<any[]> => {
  const response = await client.getEntries<any>({
    content_type: "animatedImages",
  });
  return response.items;
};

export {
  getTestimonials,
  getMentorOfTheWeek,
  getBeginMentorship,
  getFaqs,
  getBlog,
  getBlogBanner,
  getAboutUsHeader,
  getCompanyOverview,
  getWhyMentorship,
  getHeaderImages,
};
