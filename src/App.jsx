import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import VideoUploader from './components/VideoUploader'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <VideoUploader />
      <Footer />
    </div>
  )
}

export default App
