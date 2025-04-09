import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  text: string;
  onclick: () => void;
  active: boolean;
  content?: {
    question: string;
    answer: string;
  }[];
}

const StyledDropdown = ({ text, content, active, onclick }: DropdownProps) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(-1);

  const toggleQuestion = (index: number) => {
    setActiveQuestionIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Box borderBottom="solid 1px " borderBottomColor="lightGray" py="4">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        onClick={onclick}
        cursor="pointer"
      >
        <Text fontSize="xl" opacity={active ? "1" : "0.5"}>
          {text}
        </Text>
        {active ? <Plus size={15} /> : <Minus size={15} />}
      </Flex>
      {active ? (
        <Box bgColor="white" mt="2">
          {content?.map(({ question, answer }, index) => (
            <Flex
              key={question}
              justifyContent="space-between"
              cursor="pointer"
              borderBottom="solid 1px"
              borderBottomColor="gray.200"
              p="4"
              gap="2"
              flexDir="column"
              onClick={() => toggleQuestion(index)}
            >
              <Flex alignItems="center" justifyContent="space-between" w="100%">
                <Text>{question}</Text>
                {activeQuestionIndex === index ? (
                  <ChevronUp size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </Flex>
              {activeQuestionIndex === index && (
                <Text opacity="0.7" m="2">
                  {answer}
                </Text>
              )}
            </Flex>
          ))}
        </Box>
      ) : null}
    </Box>
  );
};
export default StyledDropdown;
