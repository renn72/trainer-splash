import { api, HydrateClient } from '@/trpc/server'
import Background from './_components/background'
import EmailInput from './_components/email-input'

export default async function Home() {
  // const hello = await api.post.hello({ text: 'from tRPC' })
  //
  // void api.post.getLatest.prefetch()

  const recent = await api.email.getRecent()

  console.log(recent)

  return (
    <HydrateClient>
      <main className='relative flex h-screen flex-col items-center justify-center bg-black'>
        <Background />
        <EmailInput />
      </main>
    </HydrateClient>
  )
}
