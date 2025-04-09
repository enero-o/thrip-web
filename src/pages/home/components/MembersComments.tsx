import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import CommentCard from "@thrip/components/CommentCard";
import { useGetTestimonials } from "@thrip/customHooks";

const MembersComments = () => {
  const [comments, isLoading] = useGetTestimonials();

  return (
    <Box px={{ base: "4", md: "32" }} py="12">
      <Text textAlign="center">
        <Text fontWeight="700" fontSize={{ base: "3xl", md: "5xl" }} as="span">
          See What Our{" "}
        </Text>
        <Text
          as="span"
          color="brand.100"
          fontWeight="700"
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Members{" "}
        </Text>

        <Text as="span" fontWeight="700" fontSize={{ base: "3xl", md: "5xl" }}>
          Are Saying
        </Text>
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
          justifyContent="center"
          flexDir={{ base: "column", md: "row" }}
        >
          {comments.slice(0, 3).map(({ fields }) => {
            const name = `${fields.firstName} ${fields.lastName}`;

            const avatar =
              (fields as { avatar?: { fields?: { file?: { url: string } } } })
                ?.avatar?.fields?.file?.url ?? "";

            return (
              <CommentCard
                key={String(fields.firstName)}
                image={avatar}
                location={String(fields.location)}
                title={name}
                comment={String(fields.comment)}
              />
            );
          })}
        </Flex>
      )}
      {/* <Flex pt="4" justifyContent="center">
        <Button as="a" href={routes.testimonials}>
          Read More
        </Button>
      </Flex> */}

      <Flex
        mt="20"
        bgColor="dark"
        borderRadius="10px"
        gap="5"
        p={{ base: "4", md: "20" }}
        pb={{ base: "10", md: "20" }}
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box maxW={{ base: "100%", md: "96" }}>
          <Text fontSize="xl" fontWeight="500" color="white">
            Sign Up
          </Text>
          <Text
            pt="1"
            fontSize="base"
            color="white"
            fontWeight="300"
            opacity="0.7"
          >
            Join the Thrip community to receive special offers, free
            giveaways and incredible deals.
          </Text>
        </Box>
        <VStack alignItems="start">
          <FormControl>
            <FormLabel color="white">Email</FormLabel>
            <HStack alignItems="center">
              <Input placeholder="pietro.schirano@gmail.com" bgColor="white" />
              <Button px="10" display={{ base: "none", md: "inline-flex" }}>
                Unlock Experience
              </Button>
            </HStack>
          </FormControl>
          <HStack py={{ base: "1", md: "0" }}>
            <Checkbox bgColor="white" />
            <Text color="white" fontSize="sm">
              Accept terms and conditions
            </Text>
          </HStack>
          <Button px="7" w="100%" display={{ base: "inline-flex", md: "none" }}>
            Unlock Experience
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MembersComments;
