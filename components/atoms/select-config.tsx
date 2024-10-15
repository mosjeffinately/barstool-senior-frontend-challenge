'use client';

import { HStack, Icon, Text } from '@chakra-ui/react';
import {
  type ChakraStylesConfig,
  type GroupBase,
  type OptionBase,
  type SelectComponentsConfig,
  chakraComponents,
} from 'chakra-react-select';
import { PiCaretDownBold, PiXBold } from 'react-icons/pi';

export function getComponentsConfig<
  T extends OptionBase,
  IsMulti extends boolean,
>(): SelectComponentsConfig<T, IsMulti, GroupBase<T>> {
  return {
    ClearIndicator: (props) => (
      <chakraComponents.ClearIndicator {...props}>
        <Icon as={PiXBold} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} />
      </chakraComponents.ClearIndicator>
    ),
    DropdownIndicator: (props) => (
      <chakraComponents.DropdownIndicator {...props}>
        <Icon
          as={PiCaretDownBold}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        />
      </chakraComponents.DropdownIndicator>
    ),
    Menu: ({ children, ...props }) => (
      <chakraComponents.Menu {...props} menuPlacement="bottom">
        {children}
      </chakraComponents.Menu>
    ),
    Option: (props) => (
      <chakraComponents.Option {...props}>
        <HStack
          align="center"
          justify="flex-start"
          px={{ base: 2, md: 4 }}
          py={{ base: 0.5, md: 2 }}
          w="full"
        >
          <Text fontWeight="semibold">{props.label}</Text>
        </HStack>
      </chakraComponents.Option>
    ),
  };
}

export function getChakraStylesConfig<
  T extends OptionBase,
  IsMulti extends boolean,
>(): ChakraStylesConfig<T, IsMulti, GroupBase<T>> {
  return {
    indicatorSeparator: (provided) => ({
      ...provided,
      borderWidth: 0,
    }),
    menuList: (provided) => ({
      ...provided,
      align: 'flex-start',
      borderWidth: 0,
      m: 0,
      p: 0,
      spacing: 0,
      zIndex: 'dropdown',
    }),
    option: (provided) => ({
      ...provided,
      transform: `translateZ(1px)`,
    }),
  };
}
