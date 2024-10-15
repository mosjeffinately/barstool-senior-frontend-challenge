'use client';

import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormErrorMessage,
  Icon,
  IconProps,
  Text,
} from '@chakra-ui/react';
import { isNil } from 'lodash';
import { useFormContext } from 'react-hook-form';
import { PiCheckBold } from 'react-icons/pi';

import { BaseFieldProps, ProfileSchemaType } from '../../types';

type CheckboxFieldProps = BaseFieldProps & {
  iconSize: IconProps['fontSize'];
  size: CheckboxProps['size'];
};

export const CheckboxField = ({
  isRequired = false,
  label,
  name,
}: CheckboxFieldProps) => {
  const {
    formState: { errors },
    getValues,
    register,
  } = useFormContext<ProfileSchemaType>();

  const hasError = !isNil(errors[name]);
  const errorMessage = errors[name]?.message;

  return (
    <FormControl isInvalid={hasError} isRequired={isRequired}>
      <Checkbox
        aria-labelledby={`checkbox-${name}-label`}
        icon={
          getValues(name) ? (
            <Icon
              as={PiCheckBold}
              fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
            />
          ) : undefined
        }
        size={{ base: 'md', md: 'lg' }}
        {...register(name)}
      >
        <Text
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          id={`checkbox-${name}-label`}
        >
          {label}
        </Text>
      </Checkbox>
      <FormErrorMessage>
        <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
          {errorMessage}
        </Text>
      </FormErrorMessage>
    </FormControl>
  );
};
