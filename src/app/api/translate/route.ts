import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text, target } = await req.json();

  try {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: target,
        format: "text",
      }),
    });

    const data = await res.json();

    return NextResponse.json({ translated: data.translatedText });
  } catch (err) {
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
