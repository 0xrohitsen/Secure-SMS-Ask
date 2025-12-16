import { ServerOff, EyeOff, XCircle, Smartphone } from 'lucide-react';

const securityFeatures = [
  {
    icon: ServerOff,
    title: 'No Cloud Database',
    description:
      'Your SMS messages and settings are never stored on our servers. Everything is processed and stored locally.',
  },
  {
    icon: EyeOff,
    title: 'No Analytics or Tracking',
    description:
      "We don't track your usage, collect data, or share information with any third parties. Your activity is your own.",
  },
  {
    icon: XCircle,
    title: '100% Ad-Free',
    description:
      'The app is completely free of advertisements, trackers, and in-app purchases. It was built for personal use.',
  },
  {
    icon: Smartphone,
    title: 'On-Device Processing',
    description:
      'All forwarding logic happens directly on your device. Your data never leaves your phone unless you forward it.',
  },
];

export default function Security() {
  return (
    <section id="security" className="w-full bg-card py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unyielding Privacy & Safety
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Built with a privacy-first philosophy. Your data is yours, and
            yours alone.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <Icon className="mt-1 h-8 w-8 shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
