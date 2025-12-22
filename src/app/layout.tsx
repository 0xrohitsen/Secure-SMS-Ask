import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'MySMS Forward | Private Android SMS Forwarder App',
  description:
    'The best SMS forwarder app for Android. Forward SMS to another phone number or a Telegram bot instantly. Total privacy, no ads, no trackers. Download the top Android SMS forwarder APK today.',
  keywords:
    'sms forwarder app, android sms forwarder, sms forwarding app, private sms, secure sms, telegram sms, otp forwarder, mysms forward, best sms forwarder, sms forwarder apk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="uU_CRWmdexyqtfeNb9gPPpyhG9rAsx3z66kP-m2cnlo"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
