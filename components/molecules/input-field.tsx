'use client';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { AsYouType } from 'libphonenumber-js';
import { isNil } from 'lodash';
import { useFormContext } from 'react-hook-form';

import { BaseFieldProps, ProfileSchemaType } from '../../types';

type InputFieldProps = BaseFieldProps & {
  type?: React.HTMLInputTypeAttribute;
};

export const InputField = ({
  helperText,
  isRequired = false,
  label,
  name,
  placeholder,
  type = 'text',
}: InputFieldProps) => {
  const {
    formState: { errors, isSubmitted },
    register,
    setValue,
  } = useFormContext<ProfileSchemaType>();

  const hasError = !isNil(errors) && !isNil(errors[name]);
  const errorMessage = errors[name]?.message;

  const onPhoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = new AsYouType('US').input(e.target.value);
    setValue(name, formatted, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: isSubmitted, // only validate if the form has already been submitted.
    });
  };

  return (
    <FormControl isInvalid={hasError} isRequired={isRequired}>
      <FormLabel fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
        {label}
      </FormLabel>
      {type === 'tel' ? (
        <Input
          placeholder={placeholder}
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
          type="tel"
          {...register(name)}
          onChange={onPhoneChangeHandler}
        />
      ) : (
        <Input
          placeholder={placeholder}
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
          type={type}
          {...register(name)}
        />
      )}
      {!isNil(helperText) && !hasError ? (
        <FormHelperText>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            {helperText}
          </Text>
        </FormHelperText>
      ) : (
        <FormErrorMessage>
          <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
            {errorMessage}
          </Text>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
