import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, PROJECTS, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../constants';

// --- HYBRID API KEY FIX ---
// This function safely detects the environment to prevent crashes
const getApiKey = (): string => {
  // 1. Try to get key from Vite (Browser/Vercel)
  try {
    // @ts-ignore - Check if import.meta.env exists
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
      return import.meta.env.VITE_GEMINI_API_KEY;
    }
  } catch (error) {
    // Silently ignore if import.meta is not allowed
  }

  // 2. Try to get key from Node.js (Google AI Studio / Server)
  try {
    // @ts-ignore - Check if process.env exists
    if (typeof process !== 'undefined' && process.env) {
      // Check for multiple common variable names
      return process.env.GEMINI_API_KEY || process.env.API_KEY || '';
    }
  } catch (error) {
    // Silently ignore if process is not defined
  }

  return '';
};

const API_KEY = getApiKey();
// ---------------------------

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
      console.error("Gemini API Key is missing. Please check your Vercel Environment Variables.");
    }
    
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Note: 'gemini-2.5-flash' might not exist yet. 
    // If you get a 404 error, change this to 'gemini-1.5-flash'
    chatInstance = ai.chats.create({
      model: 'gemini-1.5-flash', 
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
    
    // Safety check in case initialization failed
    if (!chat) {
       return "System Error: Chat not initialized. API Key may be missing.";
    }

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later.";
  }
};