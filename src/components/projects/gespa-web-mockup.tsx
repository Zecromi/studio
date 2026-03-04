import { Heart, Search, User, Cog } from "lucide-react";

export function GespaWebMockup() {
    return (
        <div className="h-full w-full bg-[#0a0a0b] rounded-lg p-3 text-slate-300 font-sans text-[10px] flex flex-col gap-2">
            <div className="flex items-center justify-between bg-white/5 backdrop-blur-md p-2 rounded-lg border border-white/10 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded p-1"><Heart className="w-3.5 h-3.5 text-white" /></div>
                    <span className="font-bold tracking-tight text-white text-[11px]">GESPA_SYSTEM</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <div className="flex items-center bg-white/5 border border-white/10 rounded px-2 h-7 group">
                        <Search className="w-3 h-3 opacity-30 mr-2 group-focus-within:opacity-100 transition-opacity" />
                        <div className="w-16 h-1 sm:w-24 bg-white/10 rounded" />
                    </div>
                    <div className="w-7 h-7 bg-white/10 rounded-full border border-white/20" />
                </div>
            </div>

            <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden">
                <div className="lg:col-span-3 flex flex-col gap-2 overflow-hidden">
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="bg-white/5 h-10 rounded border border-white/5 animate-pulse" />)}
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex-grow">
                        <div className="flex justify-between items-center opacity-40 mb-4 border-b border-white/5 pb-2">
                            <div className="flex items-center gap-2"><User className="w-3 h-3" /> EXPEDIENTE_CLIENTE</div>
                            <Cog className="w-3 h-3" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                                    <div className="h-2 w-full bg-white/30 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col gap-2">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex-grow" />
                </div>
            </div>
        </div>
    );
}
