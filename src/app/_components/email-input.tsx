'use client'
import { useState, useRef, useEffect } from 'react'

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
    createEmail.mutate({ email })
  }

  return (
    <div className='absolute top-1/2 left-1/2 z-99 -translate-x-1/2 -translate-y-1/2'>
      <div className='relative'>
        <BarbellIcon
          size={400}
          color='#00000080'
          className='opactiy-25 absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rotate-135'
        />
        <h1 className='mb-4 w-full text-center text-3xl font-bold text-white uppercase lg:text-4xl'>
          it's coming
        </h1>
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
          <div className='lg:-gap-4 flex flex-col gap-2 lg:flex-row'>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='z-100 m-[1px] min-w-[230px] w-full rounded-full bg-black/20 px-4 py-2 text-base font-semibold text-white focus-visible:bg-black/90 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:outline-none lg:text-lg'
            />
            <button
              type='submit'
              className='z-100 rounded-full bg-white/70 px-6 py-1 text-sm font-semibold transition hover:bg-white/20 lg:text-base'
              disabled={createEmail.isPending}
            >
              {createEmail.isPending ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
