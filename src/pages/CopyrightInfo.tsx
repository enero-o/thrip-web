import { Box, ListItem, OrderedList, Text, VStack } from "@chakra-ui/react";
import BeginJourney from "@thrip/components/BeginJourney";

const list = [
  "A description of the copyrighted work that you claim has been infringed.",
  "The location of the infringing material on the Thrip website.",
  "Your contact information, including your name, address, telephone number, and email address.",
  "A statement by you that you have a good faith belief that the use of the copyrighted material is not authorised by the copyright owner, its agent, or the law.",
  "A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorised to act on the copyright owner's behalf.",
];

const CopyrightInfo = () => {
  return (
    <>
      <Box
        pt={{ base: "6", lg: "20" }}
        pb={{ base: "16", lg: "24" }}
        px={{ base: "4", md: "32" }}
      >
        <Text
          fontWeight="700"
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          textAlign="center"
          pb={{ base: "4", md: "10" }}
        >
          Copyright Information
        </Text>
        <VStack alignItems="start" gap={{ base: "4", md: "8" }}>
          <Text fontSize={{ md: "xl" }}>
            All content and materials displayed on the Thrip website,
            including but not limited to text, graphics, images, logos, videos,
            and audio clips, are the property of Thrip or its content
            suppliers and are protected by copyright laws. The compilation of
            all content on this website is the exclusive property of Thrip
            and is protected by international copyright laws.
          </Text>
          <Text fontSize={{ md: "xl" }}>
            The content on the Thrip website is provided for informational
            and educational purposes only. You may access, view, and print pages
            from the website for your personal and non-commercial use, provided
            you do not modify or remove any copyright or proprietary notices.
            Unauthorised copying, reproduction, modification, distribution,
            transmission, display, or use of the content and materials on the
            Thrip website, whether in whole or in part, is strictly
            prohibited without prior written consent from Thrip
          </Text>
          <Text fontSize={{ md: "xl" }}>
            Thrip respects the intellectual property rights of others, and we
            expect our users to do the same. If you believe that any content on
            our website infringes upon your copyright, please contact us
            immediately with the following information:
          </Text>
          <OrderedList
            display="flex"
            flexDir="column"
            gap={{ base: "3", md: "1" }}
          >
            {list.map((text) => (
              <ListItem key={text} fontSize={{ md: "xl" }}>
                {text}
              </ListItem>
            ))}
          </OrderedList>
          <Text fontSize={{ md: "xl" }}>
            Upon receiving a valid copyright infringement notice, Thrip will
            promptly investigate the alleged infringement and take appropriate
            action, which may include removing or disabling access to the
            infringing material.
          </Text>
          <Text fontSize={{ md: "xl" }}>
            Please note that Thrip may also display content and materials on
            its website that are owned by third parties and used with
            permission. Such third-party content is subject to the copyright
            terms and conditions specified by the respective copyright holders.
            For enquiries regarding the use of Thrip's copyrighted materials
            or to report copyright infringement, please contact us at {""}
            <Text fontSize={{ md: "xl" }} as="span" color="brand.100">
              hello@intagl.io
            </Text>
          </Text>
          <Text fontSize={{ md: "xl" }}>Last updated 27/03/2024</Text>
        </VStack>
      </Box>
      <BeginJourney />
    </>
  );
};

export default CopyrightInfo;
