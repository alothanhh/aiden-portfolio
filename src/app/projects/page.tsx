'use client'
import { Box, Grid, Text, Title } from '@mantine/core'

import ProjectList from '@/components/projects/project-list'
import ScrollFadeUp from '@/components/shared/scroll-fade-up'

const Projects = () => {
  return (
    <ScrollFadeUp repeat>
      <Grid pb={70}>
        <Box
          style={{
            backgroundColor: '#F7F7F7',
            width: '100%',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
          }}
        >
          <Title>PROJECTS</Title>
          <Text size='md'>A curated selection of my web projects.</Text>
        </Box>

        <ProjectList />
      </Grid>
    </ScrollFadeUp>
  )
}

export default Projects
