'use client'

import { useContext, useMemo, useState } from 'react'
import { Flex, Text } from '@mantine/core'
import { ProGallery } from 'pro-gallery'

import Title from '@/components/common/Title'
import ScrollFadeUp from '@/components/shared/scroll-fade-up'
import { items } from '@/constants/gallery.constant'
import { ScrollContext } from '@/contexts/scroll.context'
import useWindowSize from '@/hooks/use-window-size'

import 'pro-gallery/dist/statics/main.css'

const Gallery = () => {
  const { isMobile } = useWindowSize()
  const { targetId, targetRef } = useContext(ScrollContext)

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window
  const initialWidth = isMobile ? scrollingElement?.innerWidth - 32 : scrollingElement?.innerWidth - 64
  const [galleryWidth, setGalleryWidth] = useState<number>(initialWidth)

  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 0,
        scrollDirection: 'HORIZONTAL' as 'HORIZONTAL' | 'VERTICAL' | undefined,
      },
      groups: {
        repeatingGroupTypes: ['3b', '3t', '3t', '2v', '2v'] as (
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
    },
  }

  //   const parentRect = galleryRef.current?.getBoundingClientRect()
  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName: any, eventData: any) => {
    console.log({ eventName, eventData })
    // console.log(parentRect?.width)
    if (eventName === 'GALLERY_SCROLLED') {
      setGalleryWidth(isMobile ? scrollingElement.innerWidth - 32 : scrollingElement.innerWidth - 64)
    }
  }

  const container = useMemo(
    () => ({
      width: galleryWidth,
      height:
        scrollingElement.innerHeight > 1200 || isMobile
          ? scrollingElement.innerHeight / 3
          : (scrollingElement.innerHeight * 2) / 3,
    }),
    [isMobile, galleryWidth, scrollingElement.innerHeight]
  )

  return (
    <ScrollFadeUp repeat>
      <Flex
        id='education'
        align='center'
        justify='center'
        p={isMobile ? 'md' : 'xl'}
        ref={targetId === 'gallery' ? targetRef : null}
        gap={isMobile ? 'sm' : 'md'}
        direction='column'
        style={{
          width: '100%',
        }}
      >
        <Flex direction='column' gap='md'>
          <Title text='GALLERY' />
          <Text style={{ textAlign: 'center' }}>
            Design publications I created in university extracurricular activities.
          </Text>
        </Flex>

        <ProGallery
          items={items}
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
