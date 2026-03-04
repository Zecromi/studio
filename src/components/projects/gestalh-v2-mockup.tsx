import { Star, Users, Cog, User, Sparkles, Snowflake } from "lucide-react";

export function GestalhV2Mockup() {
    return (
        <div className="h-full w-full bg-slate-50 rounded-lg font-sans text-xs text-slate-800 flex flex-col sm:flex-row border shadow-inner overflow-hidden">
            <div className="w-full sm:w-20 bg-white flex sm:flex-col items-center justify-around sm:justify-start py-6 sm:space-y-8 border-b sm:border-b-0 sm:border-r">
                <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100"><Star className="w-6 h-6 text-white" /></div>
                <Users className="w-5 h-5 text-slate-300" />
                <Cog className="w-5 h-5 text-slate-300" />
            </div>
            <div className="flex-1 p-6 flex flex-col overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow overflow-auto lg:overflow-hidden">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)' }}>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center rotate-3 shadow-xl shadow-indigo-100">
                                    <User className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <p className="text-slate-500 font-medium">Panel Principal</p>
                                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">Bienvenido, Admin</h4>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {['Talento', 'Cultura', 'Métricas', 'Avisos'].map((label, i) => (
                                <div key={label} className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`w-10 h-10 mx-auto rounded-xl mb-3 flex items-center justify-center ${i === 0 ? 'bg-amber-100 text-amber-600' : 'bg-slate-50 text-slate-400'}`}>
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-600">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="text-indigo-600 font-bold text-3xl">14:22</div>
                            <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-widest font-bold">Local Time</p>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-2/3" />
                            </div>
                        </div>
                        <div className="bg-indigo-600 p-6 rounded-3xl shadow-2xl shadow-indigo-200 text-white relative overflow-hidden group">
                            <Snowflake className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-125 transition-transform duration-500" />
                            <p className="text-[10px] font-bold opacity-70 mb-1 uppercase tracking-widest">Estado</p>
                            <p className="text-xl font-bold">Sistema Activo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
