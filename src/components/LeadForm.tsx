import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateFormData } from "../utils/validateForm";

const WEBHOOK = import.meta.env.VITE_FORM_WEBHOOK_URL as string | undefined;
const REDIRECT = (import.meta.env.VITE_REDIRECT_URL as string) || "/aula";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    // Validar dados usando a função de validação
    const validationErrors = validateFormData({
      nome,
      email,
      whatsapp: telefone,
    });

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    setLoading(true);

    try {
      if (WEBHOOK) {
        await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email, telefone, source: "inscricao" }),
        }).catch(() => null);
      }
    } finally {
      navigate(REDIRECT);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <ul className="text-red-700 text-sm space-y-1">
            {errors.map((error, idx) => (
              <li key={idx}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
      <input
        className="input-premium"
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        className="input-premium"
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input-premium"
        type="tel"
        placeholder="(11) 99999-9999"
        value={telefone}
        onChange={(e) => setTelefone(maskPhone(e.target.value))}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-premium"
      >
        {loading ? "Liberando acesso..." : "Assistir a aula"}
      </button>
      <p className="text-center text-xs text-stone-500 pt-1">
        Seus dados estão seguros. Sem spam.
      </p>
    </form>
  );
}
