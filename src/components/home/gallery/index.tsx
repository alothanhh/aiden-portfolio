'use client'

import { useEffect, useMemo, useState } from 'react'
import { Flex, Text } from '@mantine/core'
import { ProGallery } from 'pro-gallery'

import Title from '@/components/common/Title'
import ScrollFadeUp from '@/components/shared/scroll-fade-up'
import { GALLERY_ITEMS } from '@/constants/gallery.constant'
import useWindowSize from '@/hooks/use-window-size'

import 'pro-gallery/dist/statics/main.css'

const Gallery = () => {
  const { isMobile } = useWindowSize()

  const [galleryWidth, setGalleryWidth] = useState<number>(0) // Initialize to 0
  const [galleryHeight, setGalleryHeight] = useState<number>(0) // Add height state
  const [scrollingElement, setScrollingElement] = useState<Window | null>(null)

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScrollingElement(window)
      const handleResize = () => {
        const width = isMobile ? window.innerWidth - 32 : window.innerWidth - 64
        const height = window.innerHeight > 1200 || isMobile ? window.innerHeight / 3 : (window.innerHeight * 2) / 3
        setGalleryWidth(width)
        setGalleryHeight(height)
      }
      window.addEventListener('resize', handleResize)
      handleResize() // Initial calculation
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 0,
        scrollDirection: 'HORIZONTAL' as 'HORIZONTAL' | 'VERTICAL' | undefined,
      },
      groups: {
        repeatingGroupTypes: ['3b', '3t', '3t', '2v', '2v', '3b', '3t', '2v', '1', '3b'] as (
          | '3b'
          | '3t'
          | '1'
          | '2h'
          | '2v'
          | '3h'
          | '3v'
          | '3l'
          | '3r'
        )[],
      },
    },
    behaviourParams: {
      gallery: {
        horizontal: {
          blockScroll: false,
        },
      },
      item: {
        clickAction: 'ACTION' as 'ACTION' | 'NOTHING' | 'LINK' | 'MAGNIFY' | undefined,
        overlay: {
          hoveringBehaviour: 'NEVER_SHOW' as 'APPEARS' | 'DISAPPEARS' | 'ALWAYS_SHOW' | 'NEVER_SHOW',
        },
        content: {
          hoverAnimation: 'ZOOM_IN' as
            | 'NO_EFFECT'
            | 'ZOOM_IN'
            | 'BLUR'
            | 'GRAYSCALE'
            | 'SHRINK'
            | 'INVERT'
            | 'COLOR_IN'
            | 'DARKENED',
        },
      },
    },
  }

  //   const parentRect = galleryRef.current?.getBoundingClientRect()
  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName: any) => {
    if (eventName === 'GALLERY_SCROLLED' && scrollingElement) {
      const width = isMobile ? scrollingElement.innerWidth - 32 : scrollingElement.innerWidth - 64
      setGalleryWidth(width)
    }
  }

  const container = useMemo(
    () => ({
      width: galleryWidth,
      height: galleryHeight,
    }),
    [galleryWidth, galleryHeight]
  )

  return (
    <ScrollFadeUp repeat>
      <Flex
        id='gallery'
        align='center'
        justify='center'
        p={isMobile ? 'md' : 'xl'}
        gap={isMobile ? 'sm' : 'md'}
        direction='column'
        style={{
          width: '100%',
        }}
      >
        <Flex direction='column' gap='md'>
          <Title text='GALLERY' />
          <Text c='gray' style={{ textAlign: 'center' }}>
            Design publications I created in university extracurricular activities.
          </Text>
        </Flex>

        <ProGallery
          items={GALLERY_ITEMS}
          options={options}
          container={container}
          scrollingElement={scrollingElement}
          eventsListener={eventsListener}
        />
      </Flex>
    </ScrollFadeUp>
  )
}

export default Gallery
