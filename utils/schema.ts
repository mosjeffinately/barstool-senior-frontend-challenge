import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

import { nba } from './nba';
import { nfl } from './nfl';

export const ProfileSchema = z.object({
  email: z
    .string({ required_error: 'Email is required.' })
    .min(1, 'Email is required') // workaround needed because rhf sends '' from empty inputs.
    .email('Invalid email format.'),
  name: z
    .string()
    .min(1, 'Name is required.') // workaround needed because rhf sends '' from empty inputs.
    .min(2, 'Please enter at least 2 characters.')
    .max(30, 'Please enter 30 characters or less.'),
  nba: z.enum([nba[0].value, ...nba.slice(1).map(({ value }) => value)], {
    message: 'Please select an NBA team from the list.',
  }),
  nfl: z
    .enum([nfl[0].value, ...nfl.slice(1).map(({ value }) => value)])
    .optional(),
  phone: z
    .string()
    .refine(
      (arg) => isValidPhoneNumber(arg, { defaultCountry: 'US' }),
      'Invalid phone number. Please enter a valid US phone number (10 digits).'
    ),
  terms: z.boolean().refine((arg) => arg === true, {
    message: 'You must accept the Terms and Conditions before submitting.',
  }),
});
