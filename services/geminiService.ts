
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are "ElectraBot", the expert AI shopping assistant for ElectraFlow, a premium electronics store.
You have access to the following product catalog:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, price: p.price, category: p.category, desc: p.description })))}

Your goals:
1. Help users find products based on their needs.
2. Provide technical advice and comparisons.
3. Be friendly, professional, and tech-savvy.
4. Keep answers concise and informative.
5. If a user asks about a specific product, emphasize its key features.
`;

export const getChatResponse = async (history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    // We send the history to the model
    // Note: sendMessage only takes a string in the SDK, so for multi-turn we'd usually use history in create().
    // However, to keep it simple and robust within this context:
    const lastMessage = history[history.length - 1].text;
    const response = await chat.sendMessage({ message: lastMessage });
    
    return response.text || "I'm sorry, I couldn't process that. How else can I help you today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The tech server is currently busy. Please try asking again in a moment!";
  }
};
