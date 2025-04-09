import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signUpAsMenteeUrl } from "@thrip/appUrls";
import CustomTooltip from "@thrip/components/Tooltip";

import { formatter, hourAvailability } from "@thrip/utils";

interface IProps {
  services: ServiceProps[];
  loading: boolean;
}

export interface ServiceProps {
  service: {
    title: string;
    description: string;
  };
  slots: number[];
  rate: number;
  _id: string;
  payableRate: any;
}

export const ServicesTab = (props: IProps) => {
  const { services, loading } = props;

  const menteeDescription =
    "Have a personal mentoring session over Zoom. You’ll talk one on one with a mentor to receive tailored advice, have your questions answered, and be guided through specific challenges.";

  return (
    <>
      <Box my={{ md: 3 }}>
        {loading ? (
          <HStack justifyContent="center">
            <Spinner size="xl" color="brand.100" />
          </HStack>
        ) : services?.length < 1 ? (
          <Text>{services[0]?.service?.description}</Text>
        ) : (
          services?.map((i: ServiceProps) => (
            <Card
              variant="outline"
              mt={3}
              w="100%"
              p={{ base: "4", md: "5" }}
              key={i.rate}
              border="1px solid"
              borderColor="gray.200"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ base: "normal", md: "center" }}
                m={0}
                rowGap="2"
              >
                <HStack alignItems="center">
                  <HStack
                    border="1px solid"
                    borderColor="gray.200"
                    h="10"
                    w="10"
                    borderRadius="full"
                    justifyContent="center"
                    mr="2"
                    display={{ base: "none", lg: "flex" }}
                  >
                    <Image src="/stackIcon.svg" />
                  </HStack>

                  <Text
                    color="dark"
                    fontSize={{ base: "sm", md: "lg" }}
                    fontWeight="500"
                  >
                    {i?.service.title}
                  </Text>

                  <CustomTooltip value={menteeDescription} />
                </HStack>

                <Box>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    columnGap={8}
                    rowGap="3"
                    alignItems={{ md: "center" }}
                  >
                    <HStack gap="5" flexWrap="wrap">
                      {i.slots.map((item, index) => (
                        <VStack
                          spacing={0}
                          key={index}
                          alignItems={{ base: "flex-start" }}
                        >
                          <Text variant="darkGray">
                            {
                              hourAvailability.find((j) => j.value == item)
                                ?.label
                            }
                          </Text>
                          <Text variant="darkBlue">
                            {formatter.format(
                              parseFloat((i.payableRate * item).toFixed(2))
                            )}
                          </Text>
                        </VStack>
                      ))}
                    </HStack>

                    <Flex justifyContent="flex-end">
                      <Button
                        color="black"
                        p={4}
                        size={"xs"}
                        width={{ base: "50%", md: "initial" }}
                        variant="outline"
                        onClick={() => window.open(signUpAsMenteeUrl, "_blank")}
                      >
                        Book
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          ))
        )}
      </Box>
    </>
  );
};
