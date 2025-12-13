import { ServerOff, EyeOff, XCircle, Smartphone } from 'lucide-react';

const securityFeatures = [
  {
    icon: ServerOff,
    title: 'No Cloud Storage',
    description:
      'Your SMS messages are never stored on our servers or in the cloud.',
  },
  {
    icon: EyeOff,
    title: 'No Third-Party Analytics',
    description: "We don't track your usage or share data with any third parties.",
  },
  {
    icon: XCircle,
    title: 'No Ads or Trackers',
    description:
      'The app is completely free of advertisements and tracking scripts.',
  },
  {
    icon: Smartphone,
    title: 'All Processing is Local',
    description: 'Everything happens on your device. Your data never leaves it.',
  },
];

export default function Security() {
  return (
    <section id="security" className="w-full bg-card py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Privacy is Our Priority
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            We built Secure SMS Ask with a privacy-first approach from the ground
            up.
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
