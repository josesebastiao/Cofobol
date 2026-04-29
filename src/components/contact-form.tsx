"use client";

import { useState, useTransition } from "react";

type Status = {
  type: "success" | "error";
  message: string;
} | null;

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>(null);
  const [isPending, startTransition] = useTransition();

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const data = (await response.json()) as { message?: string };

        if (!response.ok) {
          throw new Error(data.message || "Não foi possível enviar a mensagem.");
        }

        setForm(initialForm);
        setStatus({
          type: "success",
          message: data.message || "Mensagem enviada com sucesso.",
        });
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error instanceof Error
              ? error.message
              : "Ocorreu um erro ao enviar o formulário.",
        });
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="card-shell rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-blue-deep">Nome</span>
          <input
            className="field"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Seu nome"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-blue-deep">Telefone</span>
          <input
            className="field"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+244 ..."
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-blue-deep">Email</span>
          <input
            type="email"
            className="field"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="email@exemplo.com"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-blue-deep">Assunto</span>
          <input
            className="field"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder="Como posso ajudar?"
            required
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-semibold text-blue-deep">Mensagem</span>
        <textarea
          className="field min-h-36 resize-y"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Escreva a sua mensagem"
          required
        />
      </label>

      {status ? (
        <p
          className={`status-message mt-4 ${
            status.type === "success" ? "status-success" : "status-error"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="submit" className="btn-primary" disabled={isPending}>
          {isPending ? "A enviar..." : "Enviar mensagem"}
        </button>
      </div>
    </form>
  );
}
