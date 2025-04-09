import { useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import {
  Box,
  Flex,
  HStack,
  Image,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Pause, Play } from "lucide-react";

interface Props {
  images: string[];
}

const ScrollAnimation = ({ images }: Props) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const controls = useAnimation();
  const yValue = useMotionValue(0);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const leftImages = images?.slice(0, Math.ceil(images.length / 2)) ?? [];
  const rightImages = images?.slice(Math.ceil(images.length / 2)) ?? [];

  useEffect(() => {
    controls.start({
      y: ["0%", isLargerThan800 ? "-50%" : "-25%"],
      transition: {
        repeatType: "loop",
        repeat: Infinity,
        duration: isLargerThan800 ? 20 : 10,
        ease: "linear",
      },
    });
    setIsPlaying(true);
  }, [controls, isLargerThan800]);

  useEffect(() => {
    const unsubscribe = yValue.onChange((latest) => {
      controls.start({ y: latest });
    });

    return unsubscribe;
  }, [yValue, controls]);

  const toggleAnimation = () => {
    if (isPlaying) {
      controls.stop();
      setIsPlaying(false);
    } else {
      controls.start({
        y: [yValue.get(), isLargerThan800 ? "-50%" : "-25%"],
        transition: {
          repeatType: "loop",
          repeat: Infinity,
          duration: isLargerThan800 ? 20 : 10,
          ease: "linear",
        },
      });
      setIsPlaying(true);
    }
  };

  return (
    <Box position="relative">
      <Box overflow="hidden" height="690px">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="14"
          background="linear-gradient(180deg, rgba(255, 255, 255, 0.5)0%, rgba(0, 0, 0, 0) 100%)"
          zIndex="1"
        />
        <Box
          position="absolute"
          bottom="16"
          left="0"
          right="0"
          height="40"
          background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.5) 100%)"
          zIndex="1"
        />
        <motion.div key="scrollAnimation" animate={controls}>
          <Flex alignItems="center" gap="5" pl={{ md: "10" }}>
            <VStack gap="5">
              {leftImages?.map((imageUrl, index) => (
                <Image
                  boxSize={{ base: "52", md: "80" }}
                  objectFit="cover"
                  borderRadius="20px"
                  objectPosition="center"
                  key={index}
                  src={imageUrl}
                />
              ))}
            </VStack>
            <VStack gap="5">
              {rightImages?.map((imageUrl, index) => (
                <Image
                  objectFit="cover"
                  objectPosition="center"
                  boxSize={{ base: "52", md: "80" }}
                  borderRadius="20px"
                  key={index}
                  src={imageUrl}
                />
              ))}
            </VStack>
          </Flex>
        </motion.div>
      </Box>

      <Flex justifyContent="right" pt="10" pr="5">
        <HStack
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="gray.200"
          p="2"
          borderRadius="100%"
          onClick={toggleAnimation}
        >
          {isPlaying ? <Pause size={30} /> : <Play size={30} />}
        </HStack>
      </Flex>
    </Box>
  );
};

export default ScrollAnimation;
