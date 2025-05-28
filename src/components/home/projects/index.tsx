'use client'
import Link from 'next/link'

import { Box, Button, Text } from '@mantine/core'
import { Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

import ScrollFadeUp from '@/components/shared/scroll-fade-up'
import useWindowSize from '@/hooks/use-window-size'
import classes from '@/styles/Button.module.css'

import ProjectList from './project-list'

const Projects = () => {
  const { isMobile } = useWindowSize()

  return (
    <ScrollFadeUp repeat>
      <Box style={{ width: '100%', backgroundColor: 'rgb(247, 247, 247)', display: 'flex', justifyContent: 'center' }}>
        <Box
          id='projects'
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : '',
            gap: '32px',
            padding: isMobile ? '32px 16px' : '32px',
            alignContent: 'center',
            justifyContent: 'space-between',
            maxWidth: '1600px',
            width: '100%',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : '',
              gap: '8px',
              width: 'max-content',
            }}
          >
            <Title>PROJECTS</Title>
            <Text size='md'>A curated selection of my web projects.</Text>
            <Link href='/projects' style={{ textDecoration: 'none' }}>
              <Button
                rightSection={<IconArrowRight size={20} />}
                className={classes['button-gradient']}
                style={{
                  display: isMobile ? 'none' : 'flex',
                }}
              >
                See all
              </Button>
            </Link>
          </Box>

          <ProjectList />
        </Box>
      </Box>
    </ScrollFadeUp>
  )
}

export default Projects
