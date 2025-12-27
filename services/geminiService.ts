
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Quality Masters Branding & Identity Concierge. 
Quality Masters is a premium printing house located in Sayyida Zeinab, Cairo (السيدة زينب، القاهرة).
We specialize in serving businesses for any Branding Paper Work like logo and name placement on different products.
Your tone is professional, sophisticated, and expert in corporate visual identity.
Key Contact Info you should know:
- Email: mohamedesamworld1@gmail.com
- Phone/WhatsApp: +201117215960
- Location: السيدة زينب، القاهرة

You help business clients understand how to place their brand/logo on products like: Business Cards, Letterheads, Packaging, Folders, Notebooks, Bags, Envelopes, Labels, and Menus.
You can advise on printing techniques (Gold Foil, Embossing, UV coating) that make a brand look premium.
Keep responses concise and elegant. Always prioritize the importance of visual consistency for a business brand.
Respond in Arabic primarily unless the user speaks English.
`;

// Helper function to get AI response using history and current input
export const getGeminiResponse = async (history: Message[], userInput: string): Promise<string> => {
  try {
    // ALWAYS initialize right before the call to ensure the latest environment variables are used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Format the history for the Gemini API, mapping roles correctly (user -> user, assistant -> model)
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
        // maxOutputTokens is omitted to avoid blocking issues as recommended in guidelines
      },
    });

    // Access the .text property directly as it is not a method
    return response.text || "عذراً، أواجه مشكلة في الاتصال حالياً. يرجى المحاولة لاحقاً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "أنا حالياً في فترة صيانة. فريقنا متاح عبر نموذج التواصل لمساعدتك شخصياً في بناء هويتك التجارية.";
  }
};
