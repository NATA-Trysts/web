import { Button } from '@components/Button'
import { Container } from '@components/Container'

export const AvailableToday = () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center gap-10 pb-16 text-center'>
        <h1 className='text-gradient text-5xl md:text-8xl'>
          Get ready for the future.
          <br />
          Available today.
        </h1>
        <div className='flex gap-[1.6rem]'>
          <Button type='button' intent='primary' size='lg'>
            Start for free
          </Button>
        </div>
      </div>
    </Container>
  )
}
