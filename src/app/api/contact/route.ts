import { NextResponse } from "next/server";

import { saveContactSubmission } from "@/lib/content-store";

function isEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const payload = {
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      subject: String(body.subject || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      return NextResponse.json(
        { message: "Preencha todos os campos do formulário de contacto." },
        { status: 400 }
      );
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json(
        { message: "Informe um endereço de email válido." },
        { status: 400 }
      );
    }

    await saveContactSubmission(payload);

    return NextResponse.json({
      message: "Mensagem enviada e preparada para acompanhamento no Firebase.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível processar o contacto.",
      },
      { status: 500 }
    );
  }
}
