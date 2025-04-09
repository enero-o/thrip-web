import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Leaders from "./components/Leaders";
import BeginJourney from "@thrip/components/BeginJourney";
import Faqs from "./components/Faqs";
import Inspirations from "./components/Inspirations";
import MembersComments from "./components/MembersComments";

const Home = () => {
  return (
    <Box w="100%">
      <Header />
      <Leaders />
      <Inspirations />
      <BeginJourney />
      <MembersComments />
      <Faqs />
    </Box>
  );
};

export default Home;
