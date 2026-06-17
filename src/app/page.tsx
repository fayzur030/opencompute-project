import Cards from './components/home/Card'
import Hero from './components/home/Hero'
import OpenComputeSpec from './components/home/text'
import ComputeSpecsAnimated from './components/home/text'
import ComputeSpecs from './components/home/text'

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Cards />
      <OpenComputeSpec />
    </div>
  )
}
