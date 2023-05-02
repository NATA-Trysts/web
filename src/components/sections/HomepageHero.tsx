import { Button, Highlight } from '@components/Button'
import { Hero, HeroSubtitle, HeroTitle } from '@components/Hero'
import { HeroImage } from '@components/HeroImage'
import { ChevronIcon } from '@components/icons/chevron'

export const HomepageHero = () => (
  <Hero>
    <Button href='/' intent='secondary' size='sm' className='translate-y-[-1rem] animate-fade-in opacity-0'>
      <span>Bring your Events to Metaverse</span>
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]'>
      Trysts make your next event
      <br className='hidden md:block' /> deserve every second
    </HeroTitle>
    <HeroSubtitle className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]'>
      Introducing the new standard way for future online events
      <br className='hidden md:block' /> Communicate, collaborate and more connected.
    </HeroSubtitle>
    <Button
      href='https://app.trysts.io/login'
      intent='primary'
      size='lg'
      className='translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]'>
      Create your first Virtual Space
      <Highlight>
        <ChevronIcon fill='currentColor' />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
)
