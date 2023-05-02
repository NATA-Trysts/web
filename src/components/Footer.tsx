import { Container } from '@components/Container'
import { Logo } from '@components/icons/logo'

export const Footer = () => {
  return (
    <footer className='mt-12 border-t border-gray-100 py-[5.6rem] text-md'>
      <Container className='flex flex-col justify-between lg:flex-row'>
        <div>
          <div className='flex h-full flex-row justify-between lg:flex-col'>
            <div className='flex items-center text-gray-400'>
              <Logo className='mr-4 h-4 w-4' /> Trysts - The next level Virtual Space
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
