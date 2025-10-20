import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Puneet!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={true}
    backgroundColor="#2A4363"
  >
    
      <Avatar src='https://wallpapercave.com/wp/wp1812462.jpg '></Avatar>
      <Heading as='h2'>{greeting}
      </Heading>
    <VStack><p>{bio1}</p>
    <p>{bio2}</p></VStack>  
    
    
  </FullScreenSection>
);

export default LandingSection;
