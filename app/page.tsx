import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Explorer"
          topic="Neural Networks"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="113"
          name="Geura the Mapper"
          topic="Neural Networks and AI"
          subject="Tech"
          duration={35}
          color="#e5d0ff"
        />
        <CompanionCard
          id="133"
          name="Qura the Language"
          topic="Networks"
          subject="English"
          duration={55}
          color="#afea6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently Completed Lessons"
          companions={recentSessions}
          classNames="w-2/3 max-lg:width-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page