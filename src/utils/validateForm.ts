// Validação dos dados do formulário
export function validateFormData(data: {
  nome?: string;
  email?: string;
  whatsapp?: string;
}): string[] {
  const errors: string[] = [];

  // Validar nome
  if (!data.nome || !data.nome.trim()) {
    errors.push("Nome é obrigatório");
  } else if (data.nome.trim().length < 3) {
    errors.push("Nome deve ter pelo menos 3 caracteres");
  }

  // Validar email
  if (!data.email || !data.email.trim()) {
    errors.push("Email é obrigatório");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push("Email inválido");
    }
  }

  // Validar WhatsApp
  if (!data.whatsapp || !data.whatsapp.trim()) {
    errors.push("WhatsApp é obrigatório");
  } else {
    // Remove caracteres não numéricos para validar
    const phoneOnly = data.whatsapp.replace(/\D/g, "");
    if (phoneOnly.length < 10) {
      errors.push("WhatsApp deve ter pelo menos 10 dígitos");
    }
  }

  return errors;
}
