import {
  AboutUsHeaderData,
  BeginMentorship,
  BlogBanner,
  BlogData,
  CompanyOverviewData,
  Faqs,
  MentorOfTheWeek,
  Testimonial,
  WhyMentorshipData,
} from "@thrip/contentful/types";
import useContentful from "./useContentful";
import {
  getAboutUsHeader,
  getBeginMentorship,
  getBlog,
  getBlogBanner,
  getCompanyOverview,
  getFaqs,
  getHeaderImages,
  getMentorOfTheWeek,
  getTestimonials,
  getWhyMentorship,
} from "@thrip/contentful/contentful";

export const useGetTestimonials = () => {
  return useContentful<Testimonial>(getTestimonials);
};

export const useGetMentorOfTheWeek = () => {
  return useContentful<MentorOfTheWeek>(getMentorOfTheWeek);
};

export const useGetBeginMentorship = () => {
  return useContentful<BeginMentorship>(getBeginMentorship);
};

export const useGetFaqs = () => {
  return useContentful<Faqs>(getFaqs);
};

export const useGetBlog = () => {
  return useContentful<BlogData>(getBlog);
};

export const useGetBlogBanner = () => {
  return useContentful<BlogBanner>(getBlogBanner);
};

export const useGetAboutUsHeader = () => {
  return useContentful<AboutUsHeaderData>(getAboutUsHeader);
};

export const useGetCompanyOverview = () => {
  return useContentful<CompanyOverviewData>(getCompanyOverview);
};

export const useGetWhyMentorship = () => {
  return useContentful<WhyMentorshipData>(getWhyMentorship);
};

export const useGetHeaderImages = () => {
  return useContentful<any>(getHeaderImages);
};
