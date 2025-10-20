import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
// import { type } from "os";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  
useEffect(() => {
  if (response) {
    const { type, message } = response;
    onOpen(type, message);
  }
}, [response]);
  
   

  const {values,errors,touched,getFieldProps,handleSubmit} = useFormik({
    initialValues: { firstname:'',email:'',type:'',comment:''},
    onSubmit: (values) => {   submit("/", values) },
    validationSchema: Yup.object({firstname:Yup.string().required('required'),comment:Yup.string().required('required'),email:Yup.string().email('invalid mail').required("email required")}),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
           Contate me!
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={ handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstname && !! errors.firstname}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  
                  {...getFieldProps("firstname")}
                />
                <FormErrorMessage>{touched.firstname && errors.firstname}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && !! errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  
                  type="email"
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>{ touched.email && errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type"  {...getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={touched.comment && !! errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  
                  height={250}

                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{ touched.comment && errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={ isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

  export default ContactMeSection;