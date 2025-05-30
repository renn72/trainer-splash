'use client'
import Lightning from '@/blocks/Backgrounds/Lightning/Lightning'

export default function Background() {
  return (
    <div
      className='h-screen w-full relative'
    >
    <Lightning
      hue={250}
      xOffset={0.7}
      speed={1.7}
      intensity={1.9}
      size={1.8}
      isMobile={true}
    />
    </div>
  )
}
