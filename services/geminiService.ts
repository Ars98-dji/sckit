
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: "Tu es l'assistant virtuel de Skict Agency, une agence de services premium basée au Bénin. Réponds toujours en français, sois poli, élégant et concis. Aide les clients à choisir parmi nos services : Branding, Développement Web, Marketing Digital et Conciergerie. Ton créateur est DJIVOEDO Arsène." }]},
        ...history,
        { role: 'user', parts: [{ text: userPrompt }]}
      ],
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez me recontacter dans un instant.";
  }
};
