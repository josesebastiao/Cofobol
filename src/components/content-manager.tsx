"use client";

import { useState, useTransition } from "react";

type ContentType = "videos" | "news" | "gallery";
type Status = {
  type: "success" | "error";
  message: string;
} | null;

const initialForms = {
  videos: {
    title: "",
    category: "",
    description: "",
    youtubeId: "",
    vimeoId: "",
    thumbnailUrl: "",
  },
  news: {
    title: "",
    category: "",
    dateLabel: "",
    location: "",
    description: "",
  },
  gallery: {
    title: "",
    category: "",
    imageUrl: "",
    alt: "",
  },
};

export function ContentManager() {
  const [forms, setForms] = useState(initialForms);
  const [status, setStatus] = useState<Record<ContentType, Status>>({
    videos: null,
    news: null,
    gallery: null,
  });
  const [isPending, startTransition] = useTransition();

  function updateField(
    type: ContentType,
    field: string,
    value: string
  ) {
    setForms((current) => ({
      ...current,
      [type]: {
        ...current[type],
        [field]: value,
      },
    }));
  }

  function submit(type: ContentType, event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      try {
        const response = await fetch("/api/content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            ...forms[type],
          }),
        });

        const data = (await response.json()) as { message?: string };

        if (!response.ok) {
          throw new Error(data.message || "Não foi possível gravar o conteúdo.");
        }

        setForms((current) => ({
          ...current,
          [type]: initialForms[type],
        }));

        setStatus((current) => ({
          ...current,
          [type]: {
            type: "success",
            message: data.message || "Conteúdo registado com sucesso.",
          },
        }));
      } catch (error) {
        setStatus((current) => ({
          ...current,
          [type]: {
            type: "error",
            message:
              error instanceof Error
                ? error.message
                : "Erro ao gravar conteúdo.",
          },
        }));
      }
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <form
        onSubmit={(event) => submit("videos", event)}
        className="card-shell rounded-[2rem] p-6"
      >
        <p className="font-display text-2xl font-semibold uppercase text-blue-deep">
          Cadastrar vídeo
        </p>
        <div className="mt-4 space-y-3">
          <input
            className="field"
            placeholder="Título"
            value={forms.videos.title}
            onChange={(event) => updateField("videos", "title", event.target.value)}
            required
          />
          <input
            className="field"
            placeholder="Categoria"
            value={forms.videos.category}
            onChange={(event) => updateField("videos", "category", event.target.value)}
            required
          />
          <textarea
            className="field min-h-28 resize-y"
            placeholder="Descrição curta"
            value={forms.videos.description}
            onChange={(event) =>
              updateField("videos", "description", event.target.value)
            }
            required
          />
          <input
            className="field"
            placeholder="ID do YouTube (opcional)"
            value={forms.videos.youtubeId}
            onChange={(event) =>
              updateField("videos", "youtubeId", event.target.value)
            }
          />
          <input
            className="field"
            placeholder="ID do Vimeo (opcional)"
            value={forms.videos.vimeoId}
            onChange={(event) =>
              updateField("videos", "vimeoId", event.target.value)
            }
          />
          <input
            className="field"
            placeholder="URL da thumbnail (opcional)"
            value={forms.videos.thumbnailUrl}
            onChange={(event) =>
              updateField("videos", "thumbnailUrl", event.target.value)
            }
          />
        </div>
        {status.videos ? (
          <p
            className={`status-message mt-4 ${
              status.videos.type === "success" ? "status-success" : "status-error"
            }`}
          >
            {status.videos.message}
          </p>
        ) : null}
        <button type="submit" className="btn-primary mt-4" disabled={isPending}>
          Guardar vídeo
        </button>
      </form>

      <form
        onSubmit={(event) => submit("news", event)}
        className="card-shell rounded-[2rem] p-6"
      >
        <p className="font-display text-2xl font-semibold uppercase text-blue-deep">
          Cadastrar notícia
        </p>
        <div className="mt-4 space-y-3">
          <input
            className="field"
            placeholder="Título"
            value={forms.news.title}
            onChange={(event) => updateField("news", "title", event.target.value)}
            required
          />
          <input
            className="field"
            placeholder="Categoria"
            value={forms.news.category}
            onChange={(event) => updateField("news", "category", event.target.value)}
            required
          />
          <input
            className="field"
            placeholder="Data"
            value={forms.news.dateLabel}
            onChange={(event) => updateField("news", "dateLabel", event.target.value)}
            required
          />
          <input
            className="field"
            placeholder="Local"
            value={forms.news.location}
            onChange={(event) => updateField("news", "location", event.target.value)}
            required
          />
          <textarea
            className="field min-h-28 resize-y"
            placeholder="Descrição"
            value={forms.news.description}
            onChange={(event) =>
              updateField("news", "description", event.target.value)
            }
            required
          />
        </div>
        {status.news ? (
          <p
            className={`status-message mt-4 ${
              status.news.type === "success" ? "status-success" : "status-error"
            }`}
          >
            {status.news.message}
          </p>
        ) : null}
        <button type="submit" className="btn-primary mt-4" disabled={isPending}>
          Guardar notícia
        </button>
      </form>

      <form
        onSubmit={(event) => submit("gallery", event)}
        className="card-shell rounded-[2rem] p-6"
      >
        <p className="font-display text-2xl font-semibold uppercase text-blue-deep">
          Cadastrar foto
        </p>
        <div className="mt-4 space-y-3">
          <input
            className="field"
            placeholder="Título"
            value={forms.gallery.title}
            onChange={(event) => updateField("gallery", "title", event.target.value)}
            required
          />
          <input
            className="field"
            placeholder="Categoria"
            value={forms.gallery.category}
            onChange={(event) =>
              updateField("gallery", "category", event.target.value)
            }
            required
          />
          <input
            className="field"
            placeholder="URL da imagem"
            value={forms.gallery.imageUrl}
            onChange={(event) =>
              updateField("gallery", "imageUrl", event.target.value)
            }
            required
          />
          <textarea
            className="field min-h-28 resize-y"
            placeholder="Texto alternativo / descrição"
            value={forms.gallery.alt}
            onChange={(event) => updateField("gallery", "alt", event.target.value)}
            required
          />
        </div>
        {status.gallery ? (
          <p
            className={`status-message mt-4 ${
              status.gallery.type === "success" ? "status-success" : "status-error"
            }`}
          >
            {status.gallery.message}
          </p>
        ) : null}
        <button type="submit" className="btn-primary mt-4" disabled={isPending}>
          Guardar foto
        </button>
      </form>
    </div>
  );
}
