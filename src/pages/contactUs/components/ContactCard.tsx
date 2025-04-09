import { Button, VStack, Text, Image } from "@chakra-ui/react";
import React, { JSXElementConstructor, ReactElement } from "react";

interface ContactCardProps {
  blue?: boolean;
  icon?: ReactElement<any, string | JSXElementConstructor<any>>;
  iconImg?: string;
  type: string;
  children: React.ReactNode | string;
  buttonText?: string;
  buttonIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
  onClick?: () => void;
}

const ContactCard = ({
  blue,
  type,
  children,
  buttonText,
  buttonIcon,
  icon,
  iconImg,
  onClick,
}: ContactCardProps) => {
  return (
    <VStack
      alignItems="start"
      gap="4"
      maxW={{ lg: "xl" }}
      bgColor={blue ? "lightBlue" : "white"}
      borderRadius="6px"
      py={{ base: "5", md: "12" }}
      px={{ base: "4", md: "8" }}
      border={blue ? "" : "1px solid"}
      borderColor={blue ? " " : "gray.200"}
    >
      {iconImg ? (
        <Image src={iconImg} boxSize={{ base: "9", md: "auto" }} />
      ) : (
        <> {icon}</>
      )}

      <Text fontSize={{ base: "md", md: "3xl", lg: "4xl" }} fontWeight="700">
        {type}
      </Text>
      <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>{children}</Text>
      {buttonText && (
        <Button onClick={onClick} leftIcon={buttonIcon}>
          {" "}
          {buttonText}
        </Button>
      )}
    </VStack>
  );
};

export default ContactCard;
