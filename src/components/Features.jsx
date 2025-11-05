import { Shield, Sparkles, Timer, Upload } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Upload,
      title: 'One upload, many platforms',
      desc: 'Post to multiple social networks simultaneously with unified captions, hashtags, and thumbnails.'
    },
    {
      icon: Timer,
      title: 'Schedule & queue',
      desc: 'Plan drops across timezones with automatic retries and progress tracking.'
    },
    {
      icon: Shield,
      title: 'Secure by design',
      desc: 'OAuth integrations keep your account safe. Revoke access anytime.'
    },
    {
      icon: Sparkles,
      title: 'Auto-formatting',
      desc: 'We adapt aspect ratios, durations, and metadata for each destination.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Built for social teams</h2>
          <p className="mt-3 text-slate-600">Everything you need to publish Shorts, Reels, and TikToks without busywork.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-md bg-slate-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
