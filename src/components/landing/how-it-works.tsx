const steps = [
  {
    title: 'Download the APK',
    description:
      'Click the download button to get the latest MySMS Forward APK file directly on your Android device.',
  },
  {
    title: 'Allow Unknown Apps',
    description:
      "Go to your device's Settings > Security and enable 'Install unknown apps' for your browser or file manager.",
  },
  {
    title: 'Install & Grant Permissions',
    description:
      'Open the downloaded APK file to install it. On first launch, grant the necessary SMS and background permissions.',
  },
  {
    title: 'Configure & Start',
    description:
      'Enter your forwarding number or Telegram details, select a SIM, and hit the "Start" button to begin forwarding.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-24 lg-py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get Your SMS Forwarder Running in 4 Steps
          </h2>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Our simple setup process makes it easy to start forwarding your SMS
            messages in minutes.
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-1/2 top-5 hidden h-full w-px -translate-x-1/2 bg-border md:block"></div>
          <div className="grid gap-12 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="absolute -left-1/2 top-5 hidden h-px w-full bg-border md:block"></div>
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
