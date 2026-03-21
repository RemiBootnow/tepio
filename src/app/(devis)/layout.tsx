export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted">
      <main className="mx-auto md:max-w-424 min-h-dvh pb-[env(safe-area-inset-bottom)]">
        {children}
      </main>
    </div>
  );
}
