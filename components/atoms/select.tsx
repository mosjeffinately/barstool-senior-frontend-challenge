'use client';

import {
  Select as ChakraSelect,
  OptionBase,
  type Props as ChakraSelectProps,
  type GroupBase,
} from 'chakra-react-select';

import { getChakraStylesConfig, getComponentsConfig } from './select-config';

export type SelectProps<
  T extends OptionBase,
  IsMulti extends boolean,
> = ChakraSelectProps<T, IsMulti, GroupBase<T>> & {
  options: T[];
  placeholder: React.ReactNode;
};

export const Select = <T extends OptionBase, IsMulti extends boolean>({
  isMulti,
  options,
  placeholder,
  ...props
}: SelectProps<T, IsMulti>): React.ReactElement => {
  return (
    <ChakraSelect
      chakraStyles={getChakraStylesConfig<T, IsMulti>()}
      components={getComponentsConfig<T, IsMulti>()}
      isMulti={isMulti}
      // menuPortalTarget={document.body}
      options={options}
      placeholder={placeholder}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      {...props}
    />
  );
};
