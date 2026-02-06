export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary">
      <main className="mx-auto md:max-w-424 min-h-dvh">
        {children}
      </main>
    </div>
  );
}
