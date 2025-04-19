'use client'
import { useState } from 'react'

import { api } from '@/trpc/react'
import BarbellIcon from './barbell'

export default function EmailInput() {
  const [email, setEmail] = useState('')
  const [terms, setTerms] = useState(false)

  const createEmail = api.email.create.useMutation({
    onSuccess: async () => {
      setEmail('')
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ email, terms })
    if (terms) return
    createEmail.mutate({ email, })
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99'>
    <div className='relative'>
      <BarbellIcon
          size={512}
          color='#00000080'
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rotate-135 opactiy-25'
        />
      <h1 className='text-4xl font-bold text-white uppercase w-full text-center mb-4'>coming</h1>
      <form
        onSubmit={handleSubmit}
        className='flex gap-4'
      >
        <div style={{ position: 'absolute', left: '-9999px' }}>
          <label htmlFor='acceptTerms'>Check this</label>
          <input
            type='checkbox'
            name='acceptTerms'
            tabIndex={-1}
            onChange={(e) => setTerms(e.target.checked)}
            id='acceptTerms'
          />
        </div>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full z-100 font-semibold text-lg rounded-full bg-black/20 px-4 py-2 m-[1px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:bg-black/90'
          />
        <button
          type='submit'
          className='rounded-full z-100 bg-white/90 px-6 py-1 font-semibold transition hover:bg-white/20'
          disabled={createEmail.isPending}
        >
          {createEmail.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
    </div>
  )
}
