export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl mb-3">404</h1>
      <p className="text-[var(--muted)] mb-6">
        That page is not here. Maybe try the calculator?
      </p>
      <a href="/" className="inline-block px-5 py-2 rounded-lg bg-[var(--accent)] text-white">
        Calculate my footprint
      </a>
    </div>
  );
}
