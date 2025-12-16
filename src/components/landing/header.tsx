import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Download as DownloadIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="#hero" className="mr-6 flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">MySMS Forward</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#features"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              How It Works
            </Link>
            <Link
              href="#security"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Security
            </Link>
            <Link
              href="#ui-ux"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              UI/UX
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild size="sm">
            <Link href="#download">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
