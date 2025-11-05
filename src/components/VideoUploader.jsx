import { useState } from 'react'
import { Upload } from 'lucide-react'

const PLATFORMS = [
  { id: 'youtube', name: 'YouTube Shorts' },
  { id: 'tiktok', name: 'TikTok' },
  { id: 'instagram', name: 'Instagram Reels' },
  { id: 'facebook', name: 'Facebook Reels' }
]

export default function VideoUploader() {
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const [selected, setSelected] = useState(['youtube', 'tiktok', 'instagram'])
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChoose = (e) => {
    const f = e.target.files?.[0]
    if (f && f.type.startsWith('video/')) setFile(f)
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!file) return
    setLoading(true)
    setStatus(null)

    try {
      const form = new FormData()
      form.append('video', file)
      form.append('caption', caption)
      form.append('platforms', JSON.stringify(selected))

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/upload`, {
        method: 'POST',
        body: form
      })

      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      setStatus({ type: 'success', message: data.message || 'Uploaded successfully' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  const toggle = (id) => {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  return (
    <section id="uploader" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Upload your video</h3>
              <p className="mt-1 text-sm text-slate-600">Choose platforms, write a caption, and publish with one click.</p>
            </div>
            <div className="hidden sm:block h-10 w-10 rounded-md bg-slate-900 text-white grid place-items-center">
              <Upload className="h-5 w-5" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Video file</label>
              <input type="file" accept="video/*" onChange={onChoose} className="mt-2 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-900 file:text-white hover:file:bg-slate-800" />
              {file && <p className="mt-2 text-xs text-slate-500">Selected: {file.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Caption</label>
              <textarea value={caption} onChange={(e)=>setCaption(e.target.value)} rows={3} className="mt-2 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500 text-sm" placeholder="Write a catchy caption with hashtags..." />
            </div>

            <div>
              <span className="block text-sm font-medium text-slate-700 mb-2">Platforms</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PLATFORMS.map(p => (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => toggle(p.id)}
                    className={`rounded-md border px-3 py-2 text-xs font-medium transition-colors ${selected.includes(p.id) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">You will be asked to connect your accounts on first publish.</p>
              <button
                type="submit"
                disabled={!file || loading}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 px-5 py-2.5 text-white text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed shadow hover:shadow-md"
              >
                {loading ? 'Publishing…' : 'Publish to selected'}
              </button>
            </div>

            {status && (
              <div className={`rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
