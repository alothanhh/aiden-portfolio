'use client'
import { useRouter } from 'next/navigation'

import { RefObject } from 'react'
import { Button } from '@mantine/core'
import { useHover } from '@mantine/hooks'

type HeaderSectionProps = {
  button: { label: string; id: string }
  onClose: () => void
}

const HeaderSection = ({ button, onClose }: HeaderSectionProps) => {
  const { ref, hovered } = useHover<HTMLButtonElement>()
  const router = useRouter()

  const handleButtonClick = (id: string) => {
    router.push(`#${id}`)
    onClose()
  }

  return (
    <Button
      variant='transparent'
      style={{
        fontWeight: 'semibold',
        fontSize: '1em',
        color: hovered ? 'rgb(26, 247, 169)' : 'white',
      }}
      ref={ref as RefObject<HTMLButtonElement>}
      onClick={() => handleButtonClick(button.id)}
    >
      {button.label}
    </Button>
  )
}

export default HeaderSection
