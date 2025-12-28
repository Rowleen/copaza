import { Link } from '@tanstack/react-router'
import { AlertCircle, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-white p-4">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center max-w-md w-full text-center">
        <div className="bg-rose-500/20 p-4 rounded-full mb-6">
          <AlertCircle size={48} className="text-rose-500" />
        </div>
        <h2 className="text-4xl font-bold mb-2">404</h2>
        <h3 className="text-xl font-medium text-slate-300 mb-6 font-primary">
          Página no encontrada
        </h3>
        <p className="text-slate-400 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg shadow-indigo-500/25 active:scale-95"
        >
          <Home size={20} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
