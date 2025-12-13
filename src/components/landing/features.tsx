import { Lock, Cog, ShieldCheck, Send, Ban, Code } from 'lucide-react';

const featuresList = [
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'No data collection and no tracking. Your privacy is respected.',
  },
  {
    icon: Cog,
    title: 'Automatic Background Service',
    description:
      'Works seamlessly in the background, even after your device reboots.',
  },
  {
    icon: ShieldCheck,
    title: 'App Lock Protection',
    description: 'Secure the app with a PIN, preventing unauthorized access.',
  },
  {
    icon: Send,
    title: 'Smart SMS Forwarding',
    description: 'Forward messages securely to your configured endpoint.',
  },
  {
    icon: Ban,
    title: 'No Ads',
    description: 'A clean and distraction-free experience. Forever.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description:
      'Fully transparent source code available on GitHub for review.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-card py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Features
            </h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Designed with your privacy and security as the top priority.
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
