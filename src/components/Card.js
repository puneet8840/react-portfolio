import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import tt from '../images/photo1.jpg'
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
console.log(imageSrc)

  return (
    <>
    
<VStack align="start" spacing={10}>
      <Box w="100%" h="100%" overflow="hidden" border='2px solid red'>
        
        
           
          
           <Image
          src={imageSrc}
            alt={title}
            w='200px'
            h='200px'
       
    fit="cover"
        /> 
      </Box>
      
      <Heading as='h3'>{title}</Heading>
      <Text>{description}</Text>
      <p>See More! <FontAwesomeIcon icon={faArrowRight}/></p>

      </VStack>

</>

  );
};

export default Card;
