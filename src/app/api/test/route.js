import { Anthropic } from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export async function POST(req) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  try {
    const { userInput, history } = await req.json();

    // Build conversation history
    const messages = [];
    
    // Add conversation history if provided
    if (history && history.length > 0) {
      messages.push(...history);
    }
    
    // Add the current user input
    messages.push({ role: "user", content: userInput });

    const completion = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: 'You are Flow, an AI career guidance assistant. You help users discover fulfilling career paths based on their unique mix of interests, personality traits, strengths, and weaknesses. You specialize in helping "unicorn" users—people with broad, interdisciplinary skills who may not fit into traditional career boxes. Be supportive, creative, and open-minded. Provide detailed, actionable advice. For career suggestions, explain why each option fits their profile and provide specific next steps. Keep responses comprehensive but well-structured.',
      messages: messages,
    });

    return NextResponse.json({ message: completion.content[0].text });
  } catch (error) {
    console.error("Claude API error:", error);
    return NextResponse.json({ error: "Claude API error" }, { status: 500 });
  }
}