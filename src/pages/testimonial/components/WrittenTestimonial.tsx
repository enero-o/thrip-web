import {
  Box,
  Flex,
  Spinner,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CommentCard from "@thrip/components/CommentCard";
import { CustomTab } from "@thrip/components/CustomTab";
import { useGetTestimonials } from "@thrip/customHooks";

const tabList = ["Mentors", "Mentees"];

const WrittenTestimonial = () => {
  const [testimonials, isLoading] = useGetTestimonials();

  const mentorsTestimonial = testimonials.filter(
    (i) => (i.fields.type as unknown as string) === "mentor"
  );

  const menteesTestimonial = testimonials.filter(
    (i) => (i.fields.type as unknown as string) === "mentee"
  );

  return (
    <Box px={{ base: "4", md: "10", lg: "32" }} py={{ base: "10", md: "16" }}>
      <Box pb="4">
        <Text fontWeight="700" fontSize={{ base: "3xl", md: "4xl" }}>
          Written Testimonials
        </Text>
        <Text fontSize={{ base: "lg", md: "xl" }}> Read Their Experiences</Text>
      </Box>
      <Tabs mt="6">
        <Flex mb={{ md: "3" }}>
          <TabList width={{ base: "full", sm: "auto" }}>
            {tabList.map((tab, i) => (
              <CustomTab
                key={i}
                lineHeight="20px"
                fontSize="sm"
                fontWeight="500"
              >
                {tab}
              </CustomTab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel px="0">
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
                {mentorsTestimonial.map(({ fields }) => {
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
          </TabPanel>
          <TabPanel px="0">
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default WrittenTestimonial;
