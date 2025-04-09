import { Box, Text } from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";
import ProfileCard from "@thrip/components/ProfileCard";
import Carousel from "@thrip/components/Carousel";
import { ProfileCardProps } from "@thrip/utils/types";
import WrittenTestimonial from "./components/WrittenTestimonial";
import HomePageLayout from "@thrip/layouts/HomePageLayout";

const dummyData: ProfileCardProps[] = [
  {
    trending: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "John Doe",
    descriptionLength: 50,
    link: "/",
    number: 3,
    image: "/ford.png",
  },
  {
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Jane Smith",
    descriptionLength: 40,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    name: "Alice Johnson",
    descriptionLength: 60,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Bob Brown",
    descriptionLength: 45,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Emily Davis",
    descriptionLength: 55,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Michael Wilson",
    descriptionLength: 65,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
    name: "Sophia Lee",
    descriptionLength: 50,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Curabitur sagittis hendrerit ante. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    name: "William Garcia",
    descriptionLength: 55,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
    name: "Olivia Martinez",
    descriptionLength: 60,
    link: "/",
    image: "/ford.png",
  },
  {
    description:
      "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.",
    name: "Daniel Hernandez",
    descriptionLength: 45,
    link: "/",
    image: "/ford.png",
  },
];

const Testimonial = () => {
  return (
    <HomePageLayout
      header="Real Stories, Real Success"
      subHeader="Hear from your peers about how Thrip's innovative mentorship,
    courses, and masterclasses have made a difference in their
    professional journey."
    >
      <Box
        bgColor="gray.700"
        px={{ base: "0", md: "10", lg: "32" }}
        py={{ base: "10", md: "16" }}
      >
        <Box pl="14" pb="4">
          <Text fontWeight="700" fontSize={{ base: "3xl", md: "4xl" }}>
            Video Testimonials
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }}>See Their Stories</Text>
        </Box>
        <Carousel>
          {dummyData.map((profile: ProfileCardProps, index: number) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </Carousel>
      </Box>
      <WrittenTestimonial />
      <BeginJourney />
    </HomePageLayout>
  );
};

export default Testimonial;
