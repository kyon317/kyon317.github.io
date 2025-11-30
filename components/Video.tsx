import React from 'react'

interface VideoProps {
  src: string
  type?: string
  controls?: boolean
  className?: string
}

export default function Video({ src, type = 'video/mp4', controls = true, className }: VideoProps) {
  return (
    <video 
      controls={controls} 
      className={className} 
      style={{ width: '100%', maxWidth: '800px', margin: '1rem 0' }}
      preload="metadata"
      playsInline
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  )
}

