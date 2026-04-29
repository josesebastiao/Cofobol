import { NextResponse } from "next/server";

import { saveEnrollmentSubmission } from "@/lib/content-store";

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
      role: String(body.role || "").trim(),
      institution: String(body.institution || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (
      !payload.name ||
      !payload.phone ||
      !payload.email ||
      !payload.role ||
      !payload.institution
    ) {
      return NextResponse.json(
        { message: "Preencha os campos obrigatórios da inscrição." },
        { status: 400 }
      );
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json(
        { message: "Informe um endereço de email válido." },
        { status: 400 }
      );
    }

    await saveEnrollmentSubmission(payload);

    return NextResponse.json({
      message: "Inscrição registada com sucesso na base de dados.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível registar a inscrição.",
      },
      { status: 500 }
    );
  }
}
