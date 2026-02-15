import React, { useState } from 'react';
import { ChromeButton, LiquidCard } from './ChromeUI';
import { generateNFTLore } from '../../services/geminiService';
import { Loader2, Sparkles, Terminal, Activity } from 'lucide-react';
import { MOCK_TRACKS } from '../../constants';

export const GeminiLab: React.FC = () => {
    const [selectedTrackId, setSelectedTrackId] = useState(MOCK_TRACKS[0].id);
    const [generatedLore, setGeneratedLore] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        const track = MOCK_TRACKS.find(t => t.id === selectedTrackId);
        if (!track) return;

        setLoading(true);
        const lore = await generateNFTLore(track.title, track.artist, track.genre);
        setGeneratedLore(lore);
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="text-center mb-12 relative">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 caustic-orb opacity-20"></div>
                
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight relative z-10">Gemini Lab</h2>
                <p className="text-gray-500 max-w-xl mx-auto relative z-10 font-light">
                    Synthesize metadata and lore for your audio artifacts using the neural engine.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <LiquidCard className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-gray-900 mb-2">
                        <Activity size={18} />
                        <span className="uppercase tracking-widest text-xs font-bold text-gray-500">Input Data</span>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Select Artifact</label>
                        <select 
                            value={selectedTrackId}
                            onChange={(e) => setSelectedTrackId(e.target.value)}
                            className="w-full bg-white/50 border border-white/80 text-gray-800 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-shadow shadow-sm"
                        >
                            {MOCK_TRACKS.map(track => (
                                <option key={track.id} value={track.id}>
                                    {track.title} - {track.artist}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-auto">
                        <ChromeButton onClick={handleGenerate} disabled={loading} className="w-full">
                            {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> Generate Lore</>}
                        </ChromeButton>
                    </div>
                </LiquidCard>

                <LiquidCard className="min-h-[300px] flex flex-col relative bg-white/60">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="uppercase tracking-widest text-xs font-bold text-gray-500">Neural Output</span>
                    </div>

                    <div className="flex-1 bg-white/50 rounded-2xl border border-white/60 p-6 text-sm leading-relaxed text-gray-600 shadow-inner">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-full gap-3 opacity-50">
                                <span className="animate-pulse font-medium text-gray-400">Processing...</span>
                            </div>
                        ) : generatedLore ? (
                            <div className="animate-fade-in relative z-10">
                                <span className="text-blue-500 font-bold mr-2 text-lg">“</span>
                                {generatedLore}
                                <span className="text-blue-500 font-bold ml-2 text-lg">”</span>
                            </div>
                        ) : (
                            <span className="text-gray-400 italic">Waiting for input stream...</span>
                        )}
                    </div>
                </LiquidCard>
            </div>
        </div>
    );
};
