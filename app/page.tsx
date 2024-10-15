'use client';

import { Card, CardBody, Center, Hide, Show } from '@chakra-ui/react';

import { RegistrationForm } from '../components/organisms/registration-form';

export default function HomePage() {
  return (
    <Center p={{ base: 8, md: 12 }} w="full">
      <Show above="md">
        <Card w={{ base: '46rem', lg: '62rem' }}>
          <CardBody>
            <RegistrationForm />
          </CardBody>
        </Card>
      </Show>
      <Hide above="md">
        <RegistrationForm />
      </Hide>
    </Center>
  );
}
