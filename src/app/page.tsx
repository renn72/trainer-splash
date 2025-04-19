import { HydrateClient } from '@/trpc/server'
import Background from './_components/background'
import EmailInput from './_components/email-input'

export default async function Home() {
  return (
    <HydrateClient>
      <main className='relative flex h-screen w-screen flex-col items-center justify-center bg-black overflow-hidden'>
        <Background />
        <EmailInput />
      </main>
    </HydrateClient>
  )
}
