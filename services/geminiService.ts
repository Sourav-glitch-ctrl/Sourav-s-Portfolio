import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, PROJECTS, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../constants';

// Safely access API_KEY to prevent "process is not defined" errors in browser
const API_KEY = (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : '';

const systemInstruction = `
You are an AI assistant for Sourav Patra's portfolio website. 
Your goal is to answer questions about Sourav based strictly on his resume information provided below.
Be professional, concise, and helpful. 
If asked about contact info, provide his email or LinkedIn.
If asked about something not in the resume, politely say you don't have that information.

RESUME CONTEXT:
Name: ${PROFILE.name}
Title: ${PROFILE.title}
Summary: ${PROFILE.summary}
Contact: ${PROFILE.email}, ${PROFILE.phone}, ${PROFILE.location}

Education:
${JSON.stringify(EDUCATION)}

Experience:
${JSON.stringify(EXPERIENCE)}

Projects:
${JSON.stringify(PROJECTS)}

Skills:
${JSON.stringify(SKILL_CATEGORIES)}

Certifications:
${JSON.stringify(CERTIFICATIONS)}
`;

let chatInstance: Chat | null = null;

export const getChatInstance = (): Chat => {
  if (!chatInstance) {
    if (!API_KEY) {
      console.warn("Gemini API Key is missing.");
    }
    
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
  }
  return chatInstance;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatInstance();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later.";
  }
};