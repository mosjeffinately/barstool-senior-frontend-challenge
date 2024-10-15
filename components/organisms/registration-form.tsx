'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CheckboxField, InputField, SelectField } from '../molecules';

import { ProfileSchemaType } from '../../types';
import { ProfileSchema, nba, nfl } from '../../utils';

export const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState<ProfileSchemaType>();

  const methods = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  const onSubmit = (data: ProfileSchemaType) => {
    setRegistrationData(data);
  };

  return (
    <Box as={FormProvider} w="full" {...methods}>
      <Box as="form" noValidate onSubmit={handleSubmit(onSubmit)} w="full">
        <Stack spacing={{ base: 4, md: 6 }} w="full">
          <Flex align="center" justify="center">
            <Heading fontSize="3xl">Create Account</Heading>
          </Flex>
          <Stack spacing={{ base: 4, md: 6 }}>
            <InputField isRequired label="Name" name="name" />
            <InputField isRequired label="Email" name="email" type="email" />
            <InputField
              helperText="Please enter a valid US phone number."
              isRequired
              label="Phone Number"
              name="phone"
              placeholder="(555) 555-5555"
              type="tel"
            />
          </Stack>
          <Stack spacing={{ base: 4, md: 6 }}>
            <SelectField
              isRequired
              label="Favorite NBA Team"
              name="nba"
              options={nba}
              placeholder="Select an NBA Team"
            />
            <SelectField
              helperText="Select only if you're a fan."
              label="Favorite NFL Team"
              name="nfl"
              options={nfl}
              placeholder="Select an NFL Team"
            />
          </Stack>
          <Flex align="center" justify="center">
            <CheckboxField
              iconSize="xl"
              isRequired
              label="I agree to the Terms and Conditions."
              name="terms"
              size="lg"
            />
          </Flex>
          <Button alignSelf="center" type="submit" w="full">
            Sign Up
          </Button>
        </Stack>
        {isSubmitSuccessful && registrationData ? (
          <Stack py={6} spacing={{ base: 1, md: 2 }}>
            <Heading as="h3" fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
              Your submission
            </Heading>
            {Object.keys(registrationData)
              .filter((key) => key !== 'terms')
              .map((key) => (
                <HStack fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} key={key}>
                  <Text fontWeight="semibold">{`  ${key}:`}</Text>
                  <Text>{registrationData[key]}</Text>
                </HStack>
              ))}
          </Stack>
        ) : null}
      </Box>
    </Box>
  );
};
