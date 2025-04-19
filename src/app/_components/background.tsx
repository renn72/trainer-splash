'use client'
import Lightning from '@/blocks/Backgrounds/Lightning/Lightning'

export default function Background() {
  return (
    <Lightning
      hue={250}
      xOffset={0}
      speed={1.2}
      intensity={1.8}
      size={1.4}
      isMobile={true}
    />
  )
}
