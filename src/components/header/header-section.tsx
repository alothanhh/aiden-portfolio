'use client'
import { useRouter } from 'next/navigation'

import { RefObject } from 'react'
import { Button } from '@mantine/core'
import { useHover } from '@mantine/hooks'

import { THeaderItem } from '@/types'

type HeaderSectionProps = {
  item: THeaderItem
  onClose: () => void
}

const HeaderSection = ({ item, onClose }: HeaderSectionProps) => {
  const { ref, hovered } = useHover<HTMLButtonElement>()
  const router = useRouter()

  const handleButtonClick = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.replace('#', '')
      router.push(`#${id}`)
      onClose()
      return
    }

    window.open(href, '_blank')
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
      onClick={() => handleButtonClick(item.href)}
    >
      {item.label}
    </Button>
  )
}

export default HeaderSection
