import { env } from '@/env.js'
import { redirect } from 'next/navigation'
import { api } from '@/trpc/server'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug !== env.SECRET_URL) return redirect('/')

  const emails = await api.email.getAll()

  return (
    <div>
      {emails.map((email) => (
        <div key={email.id}
          className='flex gap-4 items-center'
        >
          <div>{email.createdAt.getTime()}</div>
          <div>{new Date().getTime() - 1000 }</div>
          <div>{email.createdAt.getTime() < new Date().getTime() - 1000 ? 'true' : 'false'}</div>
          <div>{email.createdAt.toLocaleString()}</div>
          <div>{email.email}</div>
          <div>{email.ip}</div>
        </div>
      ))}
    </div>
  )
}
