import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey });

export const generateNFTLore = async (trackTitle: string, artist: string, genre: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return "API Key missing. This is a simulated futuristic description of the audio artifact.";
  }

  try {
    const prompt = `
      Write a short, cryptic, and futuristic "lore" description (max 50 words) for a music NFT.
      Style: Cyberpunk, liquid metal, ethereal, high-tech.
      Track Title: ${trackTitle}
      Artist: ${artist}
      Genre: ${genre}
      
      Output only the description.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
    });

    return response.text || "Data corrupted. No description available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the Oracle failed. Static noise detected.";
  }
};

export const suggestSimilarTracks = async (trackTitle: string): Promise<string[]> => {
    if (!apiKey) return ["Simulation 1", "Simulation 2", "Simulation 3"];

    try {
        const prompt = `Suggest 3 fictional, futuristic song titles that sound similar in vibe to "${trackTitle}". Return only the titles as a comma-separated list.`;
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: prompt
        });
        const text = response.text || "";
        return text.split(',').map(s => s.trim());
    } catch (e) {
        return ["Error 1", "Error 2", "Error 3"];
    }
}
