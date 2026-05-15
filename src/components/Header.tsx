import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        <Link to="/" className="block">
          <img
            src="/ascensao-logo.png"
            alt="Ascensão Pro"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
