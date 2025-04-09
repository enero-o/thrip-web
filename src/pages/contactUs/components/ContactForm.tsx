import { Button, Card, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import TextInput from "@thrip/components/TextInput";
import TextArea from "@thrip/components/TextArea";
import { validators } from "@thrip/validators";
import { object } from "yup";

const ContactForm = () => {
  const validationSchema = object().shape({
    email: validators.email,
    name: validators.text,
  });

  return (
    <Flex
      bgColor="gray.700"
      py={{ base: "6", md: "16" }}
      px={{ base: "4", md: "10%" }}
      alignItems={{ md: "center" }}
      flexDir={{ base: "column", xl: "row" }}
      justifyContent="space-between"
      gap={{ base: "10", xl: "40" }}
    >
      <VStack w="100%" minW={{ "2xl": "xl" }} alignItems="start" gap="2">
        <Text fontWeight="700" fontSize={{ base: "2xl", md: "4xl" }}>
          Contact Form
        </Text>
        <Text
          lineHeight="8"
          fontWeight="300"
          fontSize={{ base: "md", md: "xl" }}
        >
          Have something on your mind? Need clarification or assistance? Simply
          fill out our contact form, and our dedicated team will promptly
          respond to your enquiry. Your questions matter to us, and we're
          committed to providing you with the answers you need.
        </Text>
      </VStack>
      <Card p={{ base: "4", md: 8, xl: 12 }} m="0" minW={{ xl: "lg" }} w="100%">
        <Formik
          enableReinitialize
          validationSchema={validationSchema}
          validateOnMount
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={(values) => {
            const { name, subject, message } = values;
            const mailtoLink = `mailto:hello@intagl.io?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(
              `Name: ${name}\nMessage: ${message}`
            )}`;
            window.location.href = mailtoLink;
          }}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <Stack spacing="6">
                  <TextInput name="name" label="Name" placeholder="" />

                  <TextInput
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder=""
                  />
                  <TextInput name="subject" label="Subject" placeholder="" />
                  <TextArea
                    label="Your Message"
                    fontSize={{ base: "14px", md: "16px" }}
                    placeholder=""
                    name="message"
                    h="100"
                  />
                  <Button
                    _hover={{
                      opacity: (!isValid || !dirty) ?? "0.8",
                    }}
                    isDisabled={!isValid || !dirty}
                    type="submit"
                    mt="6"
                    w="100%"
                  >
                    Send
                  </Button>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Card>
    </Flex>
  );
};

export default ContactForm;
