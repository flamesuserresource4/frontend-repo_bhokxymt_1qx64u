import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-fuchsia-500 to-blue-500 p-2 rounded-md text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">MultiPost</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#uploader" className="hover:text-slate-900 transition-colors">Upload</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</button>
          <button className="px-4 py-2 text-sm font-semibold rounded-md text-white bg-slate-900 hover:bg-slate-800">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}
