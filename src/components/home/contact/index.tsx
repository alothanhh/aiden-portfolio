'use client'

import { Box } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import Title from '../../common/Title'
import ScrollFadeUp from '../../shared/scroll-fade-up'

import ContactForm from './contact-form'
import ContactInfo from './contact-info'

function Contact() {
  const { isMobile } = useWindowSize()

  return (
    <ScrollFadeUp repeat>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          id='contact'
          style={{
            paddingTop: '32px',
            maxWidth: '1600px',
            width: '100%',
          }}
        >
          <Title text='CONTACT' />
          <Box
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '32px',
              alignContent: 'center',
              justifyContent: 'center',
              padding: isMobile ? '32px 16px' : '32px',
            }}
          >
            <ContactInfo />
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </ScrollFadeUp>
  )
}

export default Contact
