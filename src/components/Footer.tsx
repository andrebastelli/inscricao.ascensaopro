export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="/ascensao-logo.png"
          alt="Ascensão Pro"
          className="h-10 mx-auto mb-4 invert brightness-0 opacity-90"
        />
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Ascensão Pro — Seu potencial máximo na
          carreira e nos negócios.
        </p>
      </div>
    </footer>
  );
}
