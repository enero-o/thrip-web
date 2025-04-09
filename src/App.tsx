import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import Home from "./pages/home/Home";
import routes from "./routes";
import WhyMentorship from "./pages/WhyMentorship";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQs from "./pages/FAQs";
import CopyrightInfo from "./pages/CopyrightInfo";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { ApolloWrapper } from "./graphql/provider";
import { Toaster } from "react-hot-toast";
import Course from "./partials/Course";
import CourseDetail from "./partials/CourseDetail";
import Mentors from "./pages/Mentors";
import MentorsProfile from "./pages/MentorsProfile";
import { IntercomProvider } from "react-use-intercom";
import KnowUser from "./pages/KnowUser";
import MentoringFormat from "./pages/MentoringFormat";
import Layout from "./layouts/layout";

const paths = [
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.why,
    element: <WhyMentorship />,
  },
  {
    path: routes.aboutUs,
    element: <AboutUs />,
  },
  {
    path: routes.contactUs,
    element: <ContactUs />,
  },
  {
    path: routes.faqs,
    element: <FAQs />,
  },
  {
    path: routes.copyright,
    element: <CopyrightInfo />,
  },
  {
    path: routes.termsOfService,
    element: <TermsOfService />,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  // {
  //   path: routes.testimonials,
  //   element: <Testimonial />,
  // },
  // {
  //   path: routes.blog,
  //   element: <Blog />,
  // },
  {
    path: routes.masterclasses,
    element: (
      <Course
        header="Masterclasses"
        subHeader="Deepen your dental knowledge with our intensive, topic-specific
    masterclasses. Learn directly from experienced professionals
    through live sessions or at your own pace."
        courseType="MASTERCLASS"
      />
    ),
  },
  {
    path: routes.webinars,
    element: (
      <Course
        header="Webinars"
        subHeader="Expand your horizons. Join the leading minds in dentistry for our engaging webinars."
        courseType="WEBINAR"
      />
    ),
  },

  {
    path: routes.courseDetail,
    element: <CourseDetail />,
  },
  {
    path: routes.mentors,
    element: <Mentors />,
  },
  {
    path: routes.mentorProfile,
    element: <MentorsProfile />,
  },
  {
    path: routes.mentoringFormat,
    element: <MentoringFormat />,
  },
];

function App() {
  const INTERCOM_APP_ID = "qsyx5jz8";
  return (
    <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
      <ApolloWrapper>
        <Toaster />
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {paths.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Route>

              <Route path="/know-user" element={<Layout noFooter />}>
                <Route index element={<KnowUser />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </ApolloWrapper>
    </IntercomProvider>
  );
}

export default App;
