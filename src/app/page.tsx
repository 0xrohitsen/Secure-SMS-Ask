import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import HowItWorks from '@/components/landing/how-it-works';
import Security from '@/components/landing/security';
import UiUx from '@/components/landing/ui-ux';
import Download from '@/components/landing/download';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <UiUx />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
