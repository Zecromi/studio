import { Briefcase, FileText } from "lucide-react";

export function WebCandidatosMockup() {
    return (
        <div className="h-full w-full bg-slate-50 rounded-lg font-sans text-xs text-slate-800 border overflow-hidden flex flex-col">
            <div className="bg-[#1e293b] text-white p-6 text-center shrink-0">
                <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-90 text-blue-400" />
                <h4 className="text-2xl font-serif font-light mb-2">Solicitud de Empleo</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">Complete su perfil para iniciar el proceso de selección institucional.</p>
                <div className="inline-block bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 text-[9px] font-mono px-3 py-1 rounded-full mt-4">REF_ID: 290323020811</div>
            </div>
            <div className="p-1 px-4 border-b bg-white overflow-x-auto custom-scrollbar-hide">
                <div className="flex gap-4">
                    {['Documentos', 'Datos Personales', 'Escolaridad', 'Empleos', 'Bienes'].map((tab, i) => (
                        <button key={tab} className={`py-3 whitespace-nowrap border-b-2 transition-colors text-[10px] ${i === 0 ? 'border-blue-600 text-blue-600 font-bold' : 'border-transparent text-slate-400'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-6 flex-grow overflow-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="p-3 bg-blue-50 rounded-2xl shrink-0">
                        <FileText className="w-10 h-10 text-blue-700" />
                    </div>
                    <div>
                        <h5 className="text-xl font-serif text-slate-700 mb-2">Gestión Documental</h5>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                            Carga de expediente digital finalizada. Verifique que archivos como <strong>CV, Acta, IMSS y Constancia Fiscal</strong> sean legibles antes de continuar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
