import { Box, Flex, Spinner, Text, useMediaQuery } from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";
import BlogCard from "@thrip/components/BlogCard";
import { useGetBlog, useGetBlogBanner } from "@thrip/customHooks";
import { formatDate, getImageUrl } from "@thrip/utils/helpers";

const Blog = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [data, isLoading] = useGetBlog();

  const [bannerData, loadingBanner] = useGetBlogBanner();
  const blogBanner = bannerData[0];

  const image = getImageUrl(blogBanner as any);

  return (
    <>
      <Box px={{ base: "4", md: "10%" }}>
        <Flex justifyContent="center" gap="10">
          <Box pt={{ base: "10", lg: "20" }} pb={{ base: "10", lg: "20" }}>
            <Text
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
              textAlign="center"
            >
              Blog
            </Text>
            <Text
              lineHeight="8"
              textAlign="center"
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              Immerse yourself in the enriching world of dental knowledge.
            </Text>
          </Box>
        </Flex>
        <Text fontWeight="700" fontSize={{ base: "2xl", md: "3xl" }}>
          Explore Our Latest Posts
        </Text>
        {loadingBanner ? (
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
            p="10"
            my="5"
            borderRadius="12px"
            w="100%"
            h={isLargerThan700 ? "md" : "96"}
            bgRepeat="no-repeat"
            bgImage={image}
            bgSize="cover"
          />
        )}

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
            flexWrap="wrap"
            pb="16"
            gap="5"
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            {data.map(({ fields }) => {
              const name = `${fields.firstName} ${fields.lastName}`;
              const avatar =
                (fields as { image?: { fields?: { file?: { url: string } } } })
                  ?.image?.fields?.file?.url ?? "";

              const date = formatDate(String(fields.date));

              return (
                <BlogCard
                  key={String(fields.header)}
                  title={String(fields.header)}
                  description={String(fields.description)}
                  image={String(avatar)}
                  name={name}
                  date={date}
                  link={String(fields.externalLink)}
                />
              );
            })}
          </Flex>
        )}
      </Box>
      <BeginJourney />
    </>
  );
};

export default Blog;
