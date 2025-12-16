import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Download as DownloadIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Privacy-Focused Android App
          </div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Secure SMS Ask
          </h1>
          <p className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
            Private. Secure. Reliable SMS Forwarding
          </p>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Secure SMS Ask helps you safely manage and forward SMS messages. Built
            for privacy, control, and peace of mind.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="https://github.com/0xrohitsen/Secure-SMS-Ask/blob/main/SMS%20Forwarder%201.0.apk">
                <DownloadIcon className="mr-2 h-5 w-5" />
                Download APK
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/0xrohitsen/Secure-SMS-Ask/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
