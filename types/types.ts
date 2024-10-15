import { FieldPath, FieldPathValue } from 'react-hook-form';
import { z } from 'zod';

import { ProfileSchema } from '../utils/schema';
import { OptionBase } from 'chakra-react-select';

export type BaseFieldProps = {
  helperText?: React.ReactNode;
  isRequired?: boolean;
  label: React.ReactNode;
  name: FieldPath<ProfileSchemaType>;
  placeholder?: string;
};

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;

export type SelectOption<T extends keyof ProfileSchemaType> = OptionBase & {
  label: React.ReactNode;
  value: FieldPathValue<ProfileSchemaType, T>;
};
