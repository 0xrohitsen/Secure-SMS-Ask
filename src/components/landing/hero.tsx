import { Github, Download as DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Your Personal Android SMS Forwarder
          </div>
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The Ultimate SMS Forwarder App
          </h1>
          <p className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
            Private. Secure. Reliable SMS & Telegram Forwarding.
          </p>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Take full control of your SMS messages. Our SMS forwarder app lets
            you instantly forward texts to another phone or a private Telegram
            bot, with robust privacy and a beautiful Material You interface.
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
                href="https://github.com/0xrohitsen/Secure-SMS-Ask"
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
