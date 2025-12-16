import { Palette, Layers, ToggleRight, Sparkles } from 'lucide-react';

const uiFeatures = [
  {
    icon: Palette,
    title: 'Material You Design',
    description:
      'A beautiful, modern interface based on Google\'s Material 3, with support for both light and dark modes.',
  },
  {
    icon: Layers,
    title: 'Clean & Organized',
    description:
      'A single, intuitive setup screen with rounded cards and clear controls makes configuration a breeze.',
  },
  {
    icon: Sparkles,
    title: 'Elegant Animations',
    description:
      'Smooth, subtle animations and a stunning gradient header provide a delightful user experience.',
  },
  {
    icon: ToggleRight,
    title: 'Clear Visual Feedback',
    description:
      'Instantly know the app\'s status with a prominent ACTIVE/STOPPED badge and color-coded icons.',
  },
];

export default function UiUx() {
  return (
    <section id="ui-ux" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Beautiful Experience
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Designed to be as beautiful as it is functional.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {uiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex items-start gap-4">
                <Icon className="mt-1 h-8 w-8 shrink-0 text-primary" />
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
