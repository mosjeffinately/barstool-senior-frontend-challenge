'use client';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { isNil } from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';

import { Select } from '../atoms';

import { BaseFieldProps, ProfileSchemaType, SelectOption } from '../../types';

type SelectFieldProps = BaseFieldProps & {
  options: SelectOption<keyof ProfileSchemaType>[];
};

export const SelectField = ({
  helperText,
  isRequired = false,
  label,
  name,
  options,
  placeholder = 'Select a Value',
}: SelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ProfileSchemaType>();

  const hasError = !isNil(errors[name]);
  const errorMessage = errors[name]?.message;

  return (
    <FormControl isInvalid={hasError} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select<SelectOption<keyof ProfileSchemaType>, false>
            isClearable
            onChange={(val) =>
              isNil(val) ? field.onChange(undefined) : field.onChange(val.value)
            }
            options={options}
            placeholder={placeholder}
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            value={options.find((option) => option.value === field.value)}
          />
        )}
      />
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
