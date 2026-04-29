import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import {
  type ManagedContentType,
  saveManagedContent,
} from "@/lib/content-store";

function normalizeString(value: unknown) {
  return String(value || "").trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const type = normalizeString(body.type) as ManagedContentType;

    if (!["videos", "news", "gallery"].includes(type)) {
      return NextResponse.json(
        { message: "Tipo de conteúdo inválido." },
        { status: 400 }
      );
    }

    if (type === "videos") {
      const payload = {
        title: normalizeString(body.title),
        category: normalizeString(body.category),
        description: normalizeString(body.description),
        youtubeId: normalizeString(body.youtubeId),
        vimeoId: normalizeString(body.vimeoId),
        thumbnailUrl: normalizeString(body.thumbnailUrl),
      };

      if (!payload.title || !payload.category || !payload.description) {
        return NextResponse.json(
          { message: "Preencha título, categoria e descrição do vídeo." },
          { status: 400 }
        );
      }

      await saveManagedContent(type, payload);
      revalidatePath("/gestao");
      revalidatePath("/videos");

      return NextResponse.json({
        message: "Vídeo registado com sucesso no Firebase.",
      });
    }

    if (type === "news") {
      const payload = {
        title: normalizeString(body.title),
        category: normalizeString(body.category),
        dateLabel: normalizeString(body.dateLabel),
        location: normalizeString(body.location),
        description: normalizeString(body.description),
      };

      if (
        !payload.title ||
        !payload.category ||
        !payload.dateLabel ||
        !payload.location ||
        !payload.description
      ) {
        return NextResponse.json(
          { message: "Preencha todos os campos da notícia." },
          { status: 400 }
        );
      }

      await saveManagedContent(type, payload);
      revalidatePath("/gestao");
      revalidatePath("/noticias");

      return NextResponse.json({
        message: "Notícia registada com sucesso no Firebase.",
      });
    }

    const payload = {
      title: normalizeString(body.title),
      category: normalizeString(body.category),
      imageUrl: normalizeString(body.imageUrl),
      alt: normalizeString(body.alt),
    };

    if (!payload.title || !payload.category || !payload.imageUrl || !payload.alt) {
      return NextResponse.json(
        { message: "Preencha todos os campos da imagem." },
        { status: 400 }
      );
    }

    await saveManagedContent(type, payload);
    revalidatePath("/gestao");
    revalidatePath("/galeria");

    return NextResponse.json({
      message: "Foto registada com sucesso no Firebase.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível guardar o conteúdo.",
      },
      { status: 500 }
    );
  }
}
