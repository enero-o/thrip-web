import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";
import AboutCard from "./components/AboutCard";
import { useGetAboutUsHeader, useGetCompanyOverview } from "@thrip/customHooks";
import { getImageUrl } from "@thrip/utils/helpers";

const AboutUs = () => {
  const [aboutUsHeaderData] = useGetAboutUsHeader();

  const [companyOverviewData] = useGetCompanyOverview();

  const aboutUsHeader = aboutUsHeaderData[0];
  const paragraph = aboutUsHeader?.fields?.aboutUs ?? "";
  const image = getImageUrl(aboutUsHeader as any);

  return (
    <>
      <Box px={{ base: "4", md: "32" }}>
        <Flex
          pb={{ base: "10", lg: "20" }}
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap="10"
        >
          <Box px={{ base: "4", lg: "48" }} pt={{ base: "10", lg: "20" }}>
            <Text
              fontWeight="700"
              fontSize={{ base: "3xl", md: "6xl" }}
              textAlign="center"
            >
              About Us
            </Text>
            <Text
              lineHeight="8"
              textAlign={{ md: "center" }}
              fontWeight="300"
              fontSize={{ base: "md", md: "xl" }}
            >
              {String(paragraph)}
            </Text>
          </Box>
          <Image
            src={String(image)}
            width="4xl"
            objectFit="cover"
            objectPosition="center"
            borderRadius="10px"
          />
        </Flex>
      </Box>
      {companyOverviewData.map(({ fields }) => {
        const image =
          (fields as { image?: { fields?: { file?: { url: string } } } })?.image
            ?.fields?.file?.url ?? "";

        return (
          <AboutCard
            key={String(fields.header)}
            title={String(fields.header)}
            imagePlacement={String(fields.imagePlacement)}
            paragraph={String(fields.paragraph)}
            image={image}
          />
        );
      })}
      <BeginJourney />
    </>
  );
};

export default AboutUs;
