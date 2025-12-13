export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex h-20 items-center justify-center px-4 text-center md:px-6">
        <p className="text-sm text-foreground/60">
          © 2025 Secure SMS Ask.
          <br className="sm:hidden" />{' '}
          Built for personal use. Privacy-first by design.
        </p>
      </div>
    </footer>
  );
}
