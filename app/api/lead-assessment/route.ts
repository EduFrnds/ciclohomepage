import { NextResponse } from "next/server"

export const runtime = "nodejs"

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const payload = {
      name: getText(body.name),
      company: getText(body.company),
      email: getText(body.email),
      whatsapp: getText(body.whatsapp),
      area: getText(body.area),
      tracking: getText(body.tracking),
      challenge: getText(body.challenge),
      impact: getText(body.impact),
      moment: getText(body.moment),
      consent: body.consent === true,
      pageUrl: getText(body.pageUrl),
    }

    const requiredFields = [
      payload.name,
      payload.email,
      payload.area,
      payload.tracking,
      payload.challenge,
      payload.impact,
      payload.moment,
    ]

    if (requiredFields.some((field) => !field)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Preencha todos os campos obrigatórios.",
        },
        {
          status: 400,
        }
      )
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)

    if (!validEmail) {
      return NextResponse.json(
        {
          ok: false,
          message: "Informe um email válido.",
        },
        {
          status: 400,
        }
      )
    }

    if (!payload.consent) {
      return NextResponse.json(
        {
          ok: false,
          message: "É necessário confirmar o recebimento do material.",
        },
        {
          status: 400,
        }
      )
    }

    const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL
    const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN

    if (!webhookUrl || !webhookToken) {
      console.error("Variáveis de ambiente do Google Sheets não configuradas.")

      return NextResponse.json(
        {
          ok: false,
          message: "Configuração de formulário indisponível.",
        },
        {
          status: 500,
        }
      )
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...payload,
        token: webhookToken,
        source: "Landing Page Ciclo",
        userAgent: request.headers.get("user-agent") || "",
      }),
      cache: "no-store",
      redirect: "follow",
    })

    const responseText = await response.text()

    let scriptResult: { ok?: boolean } | null = null

    try {
      scriptResult = JSON.parse(responseText)
    } catch {
      console.error("Resposta inválida do Apps Script:", responseText)
    }

    if (!response.ok || !scriptResult?.ok) {
      console.error("Erro no Apps Script:", responseText)

      return NextResponse.json(
        {
          ok: false,
          message: "Não foi possível registrar suas respostas.",
        },
        {
          status: 502,
        }
      )
    }

    return NextResponse.json({
      ok: true,
    })
  } catch (error) {
    console.error("Erro ao receber lead:", error)

    return NextResponse.json(
      {
        ok: false,
        message: "Ocorreu um erro inesperado. Tente novamente.",
      },
      {
        status: 500,
      }
    )
  }
}
