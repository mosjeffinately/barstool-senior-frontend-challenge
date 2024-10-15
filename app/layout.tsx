import type { Metadata } from 'next';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Barstool Coding Challenge',
  description: 'Frontend challenge for Barstool Sports.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
