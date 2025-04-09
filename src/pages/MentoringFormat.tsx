import {
  Box,
  Button,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { signUpAsMenteeUrl } from "@thrip/appUrls";
import BeginMentorship from "@thrip/components/BeginMentorship";
import CommentCard from "@thrip/components/CommentCard";
import { useGetTestimonials } from "@thrip/customHooks";

const formats = [
  {
    title: "One-on-One Mentoring:",
    description:
      "Personalised guidance from an experienced dentist, tailored to your specific learning objectives.",
  },
  {
    title: "Group Teaching Webinars:",
    description:
      "Engage with dental experts, learn about trending topics, and best practices.",
  },
  {
    title: "Masterclasses:",
    description:
      "In-depth, long-term learning experiences covering specific dental skills or topics.",
  },
  {
    title: "Virtual Shadowing:",
    description:
      "Gain insights into the daily practice of experienced dentists, from the comfort of your home.",
  },
];

const MentoringFormat = () => {
  const [testimonials, isLoading] = useGetTestimonials();

  const menteesTestimonial = testimonials.filter(
    (i) => (i.fields.type as unknown as string) === "mentee"
  );

  return (
    <>
      <Flex
        px={{ base: "4", md: "32" }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="10"
      >
        <Box
          px={{ base: "4", lg: "48" }}
          pt={{ base: "10", lg: "20" }}
          pb={{ base: "10", lg: "20" }}
        >
          <Text
            fontWeight="700"
            fontSize={{ base: "3xl", md: "6xl" }}
            textAlign="center"
          >
            Mentoring Format
          </Text>
          <Text
            lineHeight="8"
            textAlign="center"
            fontWeight="300"
            fontSize={{ base: "md", md: "xl" }}
          >
            At{" "}
            <Text
              lineHeight="8"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
              color="brand.100"
              as="span"
            >
              Thrip
            </Text>
            , we know that every learning journey is unique. Choose the
            mentoring format that fits your needs, preferences, and schedule.
          </Text>
        </Box>
      </Flex>
      <Box px={{ base: "4", md: "32" }} pb="20">
        <List
          gap={{ base: "4", md: "6" }}
          display="flex"
          flexDir="column"
          listStyleType="none"
          pb="16"
        >
          {formats.map(({ title, description }) => (
            <HStack key={title} alignItems="start">
              <ListIcon
                mt="2"
                bgColor="brand.100"
                h={{ base: "2", md: "4" }}
                w={{ base: "2", md: "4" }}
                borderRadius="100%"
              >
                <Text></Text>
              </ListIcon>

              <ListItem fontSize={{ md: "xl" }} fontWeight="600">
                {title}{" "}
                <Text fontSize={{ md: "xl" }} fontWeight="300" as="span">
                  {description}
                </Text>
              </ListItem>
            </HStack>
          ))}
        </List>
        <Box>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="700">
            Testimonials From Existing Mentees
          </Text>
          <Text fontSize={{ base: "lg", md: "2xl" }}>
            Hear From Our Mentees
          </Text>

          {isLoading ? (
            <Flex
              h="100vh"
              width="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Spinner color="brand.100" size="xl" />
            </Flex>
          ) : (
            <Flex
              gap="5"
              py="5"
              flexWrap="wrap"
              justifyContent={{ base: "center", lg: "space-between" }}
              flexDir={{ base: "column", md: "row" }}
            >
              {menteesTestimonial.map(({ fields }) => {
                const name = `${fields.firstName} ${fields.lastName}`;
                const avatar =
                  (
                    fields as {
                      avatar?: { fields?: { file?: { url: string } } };
                    }
                  )?.avatar?.fields?.file?.url ?? "";

                const userType = {
                  name: name as string,
                  type: fields.type as unknown as string,
                };
                return (
                  <CommentCard
                    large
                    key={String(fields.firstName)}
                    image={avatar}
                    title={String(fields.title)}
                    comment={String(fields.comment)}
                    userType={userType}
                  />
                );
              })}
            </Flex>
          )}
        </Box>
        <BeginMentorship>
          <Button
            as="a"
            href={signUpAsMenteeUrl}
            w={{ base: "100%", md: "190px" }}
          >
            Sign Up
          </Button>
          <Button color="dark" bgColor="white" w={{ base: "100%", md: "auto" }}>
            Learn More
          </Button>
        </BeginMentorship>
      </Box>
    </>
  );
};

export default MentoringFormat;
