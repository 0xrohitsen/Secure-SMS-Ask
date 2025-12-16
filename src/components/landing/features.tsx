import {
  Send,
  Cog,
  Smartphone,
  ShieldCheck,
  Zap,
  IterationCw,
} from 'lucide-react';

const featuresList = [
  {
    icon: Send,
    title: 'Dual Forwarding Options',
    description:
      'Forward SMS messages to another mobile number, a Telegram bot, or both. Each can be enabled or disabled independently.',
  },
  {
    icon: Smartphone,
    title: 'Dual SIM Support',
    description:
      'Easily select which SIM card (SIM 1 or SIM 2) to use for sending forwarded messages, perfect for dual SIM devices.',
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description:
      'Your messages are forwarded within 1-2 seconds of arrival, ensuring you never miss critical information like OTPs or alerts.',
  },
  {
    icon: IterationCw,
    title: 'Intelligent Loop Prevention',
    description:
      'A critical safety feature prevents infinite forwarding loops, so the app never re-forwards messages it already sent.',
  },
  {
    icon: Cog,
    title: 'Total User Control',
    description:
      'A global Start/Stop switch gives you one-tap control. All your settings are saved locally and securely on your device.',
  },
  {
    icon: ShieldCheck,
    title: 'Rock-Solid Stability',
    description:
      'Runs as a persistent foreground service that auto-starts on boot and is optimized to avoid being killed by the OS.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-card py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful & Reliable Features
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Engineered for speed, control, and absolute reliability.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
