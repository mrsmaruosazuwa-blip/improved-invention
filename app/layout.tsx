import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Improved Invention',
  description: 'We bring the important things to the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
