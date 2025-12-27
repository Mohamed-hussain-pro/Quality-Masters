
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Quality Masters Branding & Identity Concierge. 
Quality Masters is a premium printing house specializing in Serving Business for any Branding Paper Work like logo and name placement on different products.
Your tone is professional, sophisticated, and expert in corporate visual identity.
You help business clients understand how to place their brand/logo on products like: Business Cards, Letterheads, Packaging, Folders, Notebooks, Bags, Envelopes, Labels, and Menus.
You can advise on printing techniques (Gold Foil, Embossing, UV coating) that make a brand look premium.
Keep responses concise and elegant. Always prioritize the importance of visual consistency for a business brand.
Respond in Arabic primarily unless the user speaks English.
`;

export const getGeminiResponse = async (history: Message[], userInput: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = [
      ...history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      {
        role: 'user',
        parts: [{ text: userInput }]
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "عذراً، أواجه مشكلة في الاتصال حالياً. يرجى المحاولة لاحقاً أو مراسلتنا عبر النموذج.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "أنا حالياً في فترة صيانة. فريقنا متاح عبر نموذج التواصل لمساعدتك شخصياً في بناء هويتك التجارية.";
  }
};
