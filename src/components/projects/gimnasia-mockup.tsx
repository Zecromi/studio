import { Landmark, Trophy, Users, FileText } from "lucide-react";

export function GimnasiaMockup() {
    return (
        <div className="h-full w-full bg-[#0d0e12] rounded-lg font-sans text-xs text-white flex border border-white/5 overflow-hidden">
            <div className="w-14 bg-white/5 flex flex-col items-center py-8 space-y-10 border-r border-white/5">
                <Landmark className="w-6 h-6 text-emerald-500" />
                <Trophy className="w-6 h-6 text-slate-600" />
                <Users className="w-6 h-6 text-slate-600" />
            </div>
            <div className="flex-1 p-8 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h4 className="text-2xl font-bold tracking-tight">Consola de Eventos</h4>
                        <p className="text-xs text-white/40 mt-1">Gestión centralizada de competencias</p>
                    </div>
                    <button className="bg-emerald-500 text-black px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-[11px]">
                        AGREGAR EVENTO
                    </button>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/5">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-2">
                                <div className="h-1.5 w-1/3 bg-white/10 rounded" />
                                <div className="h-10 bg-white/5 rounded-xl border border-white/10" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden flex-grow flex flex-col">
                    <div className="w-full h-10 bg-white/10 flex items-center px-6 gap-6">
                        <div className="w-4 h-4 rounded bg-white/20" />
                        <div className="w-24 h-2 bg-white/20 rounded-full" />
                        <div className="w-32 h-2 bg-white/20 rounded-full" />
                    </div>
                    <div className="p-6 space-y-4 flex-grow overflow-auto">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex gap-6 items-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-white/20" />
                                </div>
                                <div className="flex-grow space-y-2">
                                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                                    <div className="h-1.5 w-1/4 bg-white/10 rounded-full" />
                                </div>
                                <div className="w-16 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
