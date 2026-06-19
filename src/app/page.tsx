import Cards from './components/home/Card'
import DevelopmentSection from './components/home/Development'
import Expressive from './components/home/Expressive'
import Hero from './components/home/Hero'
import ResourcesSection from './components/home/Resources'
import NetworkCanvas from './components/home/text'
import Workflow from './components/home/Workflow'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Cards />
      <Expressive />
      <DevelopmentSection />
      <ResourcesSection />
      <Workflow />
    </div>
  )
}
