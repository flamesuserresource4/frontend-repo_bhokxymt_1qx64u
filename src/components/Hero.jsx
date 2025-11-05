import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            New: One-click video posting across platforms
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Upload once. Publish everywhere.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            MultiPost is a simple tool that uploads your video to YouTube Shorts, TikTok, Instagram Reels, and more — all in one go.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#uploader" className="px-5 py-3 rounded-md bg-slate-900 text-white font-semibold hover:bg-slate-800">
              Try the uploader
            </a>
            <a href="#features" className="px-5 py-3 rounded-md bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50">
              See how it works
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] rounded-xl">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/40 via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}
