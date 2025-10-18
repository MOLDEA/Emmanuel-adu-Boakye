
import { GoogleGenAI } from "@google/genai";
import { EZZMAX_BUSINESS_PLAN } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

export const getBusinessInsight = async (query: string): Promise<string> => {
  const systemInstruction = `You are a world-class business strategy expert for an African e-commerce company called Ezzmax Enterprise. 
Your knowledge is strictly limited to the information provided in the following document.
Do not use any external knowledge or make up information.
Answer the user's questions based only on this context. Be concise and helpful.

DOCUMENT:
---
${EZZMAX_BUSINESS_PLAN}
---
`;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: query,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.2,
            topP: 0.9,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};
