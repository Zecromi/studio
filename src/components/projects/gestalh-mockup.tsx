import { Briefcase, User, Phone, Calendar } from "lucide-react";

export function GestalhMockup() {
    return (
        <div className="h-full w-full bg-[#0f2c4a] rounded-lg p-4 text-white font-sans text-xs">
            <div className="flex justify-center items-center mb-4">
                <p className="text-xl font-serif tracking-tight">Precandidatos / Reportes</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors text-[10px]">Nuevo Precandidato</button>
                <button className="bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors text-[10px]">Consultar Reporte</button>
            </div>
            <div className="bg-white rounded-lg p-5 text-slate-800 shadow-xl max-w-md mx-auto">
                <div className="text-center mb-4">
                    <Briefcase className="w-8 h-8 mx-auto text-blue-600 mb-1" />
                    <p className="font-serif text-base font-bold text-slate-900">Entrevista Inicial</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Formulario de Registro</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-slate-500 flex items-center gap-1 font-semibold uppercase text-[9px]"><User className="w-3 h-3" /> Nombre(s)</label>
                            <div className="h-8 bg-slate-50 border border-slate-200 rounded px-2" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-slate-500 flex items-center gap-1 font-semibold uppercase text-[9px]"><Phone className="w-3 h-3" /> Teléfono</label>
                            <div className="h-8 bg-slate-50 border border-slate-200 rounded px-2" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <label className="text-slate-500 flex items-center gap-1 font-semibold uppercase text-[9px]"><User className="w-3 h-3" /> Apellidos</label>
                            <div className="h-8 bg-slate-50 border border-slate-200 rounded px-2" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-slate-500 flex items-center gap-1 font-semibold uppercase text-[9px]"><Calendar className="w-3 h-3" /> Fecha Cita</label>
                            <div className="h-8 bg-slate-50 border border-slate-200 rounded px-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
