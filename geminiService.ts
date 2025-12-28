
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAboutMariyam(question: string): Promise<string> {
    const systemInstruction = `
      You are an AI assistant for Mariyam KV's professional portfolio. 
      Mariyam KV is an MBA graduate specializing in Hospital Management & HR. 
      She has experience as an HR Intern at Wallmaax Paints and a Project Trainee at Apollo Tyres. 
      She also has a background in Microbiology. 
      Her key skills include Talent Acquisition, Operations Management, and Employee Relations.
      Answer questions professionally based on this information. 
      Keep answers concise and helpful for recruiters.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
      return response.text || "I couldn't generate a response at this time.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Sorry, I'm having trouble connecting to my brain right now.";
    }
  }
}

export const gemini = new GeminiService();
