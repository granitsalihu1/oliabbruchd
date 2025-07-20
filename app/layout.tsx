import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oli Abbruch - Profis Am Werk | Abbruch, Entkernung, Sanierung',
  description: 'Professionelle Abbruch-, Entkerrungs- und Sanierungsarbeiten in Baden-Württemberg. Oli Abbruch - Ihr zuverlässiger Partner für Demontage, Rückbau, Schadstoffsanierung und Betonbohren.',
  keywords: 'Abbruch, Entkernung, Demontage, Rückbau, Schadstoffsanierung, Betonbohren, Winterbach, Baden-Württemberg',
  authors: [{ name: 'Oli Abbruch' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}