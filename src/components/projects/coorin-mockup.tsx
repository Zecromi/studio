import { CheckSquare, User, Users, Clipboard, FileText, Monitor, DollarSign, TrendingUp, BookOpen, Calendar, SlidersHorizontal, Search, Lightbulb } from "lucide-react";

export function CoorinMockup() {
    return (
        <div className="h-full w-full bg-[#eef1f4] rounded-lg font-sans text-xs text-gray-800 flex flex-col sm:flex-row">
            <div className="w-full sm:w-12 bg-white flex sm:flex-col items-center justify-around sm:justify-start py-2 sm:py-4 sm:space-y-6">
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                <Search className="w-5 h-5 text-gray-500" />
                <Lightbulb className="w-5 h-5 text-gray-500" />
                <FileText className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-1 p-4">
                <h4 className="text-xl font-bold text-gray-700 mb-4">Ejecutivos</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><CheckSquare className="w-4 h-4 mx-auto mb-1" /><p>Metas</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><User className="w-4 h-4 mx-auto mb-1" /><p>Validadores</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><Users className="w-4 h-4 mx-auto mb-1" /><p>Encargados</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><Clipboard className="w-4 h-4 mx-auto mb-1" /><p>Catalogos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#008272] rounded-lg p-2 text-center text-white"><FileText className="w-4 h-4 mx-auto mb-1" /><p>Scripts</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><Monitor className="w-4 h-4 mx-auto mb-1" /><p>Pantalla</p><p className="font-bold">Abrir</p></div>
                </div>

                <h4 className="text-xl font-bold text-gray-700 mb-4">Consultas</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><DollarSign className="w-4 h-4 mx-auto mb-1" /><p>Cuentas</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><TrendingUp className="w-4 h-4 mx-auto mb-1" /><p>Productividad</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><FileText className="w-4 h-4 mx-auto mb-1" /><p>Generales</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><BookOpen className="w-4 h-4 mx-auto mb-1" /><p>Historicos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><Users className="w-4 h-4 mx-auto mb-1" /><p>Ejecutivos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><Calendar className="w-4 h-4 mx-auto mb-1" /><p>Dia del Ejecutivo</p><p className="font-bold">Abrir</p></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 border">
                        <p className="text-gray-600 font-bold mb-2 text-xs">Ramificación</p>
                        <div className="text-red-500 text-center text-[10px] py-4">Error al obtener la jerarquia de ejecutivos</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                        <p className="text-gray-600 font-bold mb-2 text-xs">Sesiones</p>
                        <div className="text-gray-500 text-center text-[10px] py-4">No hay sesiones disponibles</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
