import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download as DownloadIcon } from 'lucide-react';

export default function Download() {
  return (
    <section id="download" className="w-full bg-card py-20 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get Secure SMS Ask
        </h2>
        <p className="max-w-[600px] text-foreground/70 md:text-xl/relaxed">
          Take control of your SMS messages today. Download the app and
          experience true privacy and reliability.
        </p>
        <div className="mt-4 flex flex-col items-center gap-2">
          <Button size="lg" asChild>
            <a href="https://github.com/0xrohitsen/Secure-SMS-Ask/blob/main/SMS%20Forwarder%201.0.apk">
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download APK
            </a>
          </Button>
          <p className="text-sm text-foreground/60">
            Compatible with Android 8.0 (SDK 26) and above
          </p>
        </div>
      </div>
    </section>
  );
}
