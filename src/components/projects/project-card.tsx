import Image from 'next/image'

import { Badge, Box, Text } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { ProjectDetailProps } from '../../constants/project.constant'

const ProjectCard = ({ project, opacity }: { opacity: string; project: ProjectDetailProps }) => {
  const { isMobile } = useWindowSize()

  return (
    <Box
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '12px',
        gap: '20px',
        opacity: opacity,
        transition: 'opacity 0.3s ease-in-out, scale 0.3s ease-in-out',
        borderRadius: '8px',
        backgroundColor: 'white',
        minHeight: '195px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
      }}
    >
      <Image
        src={project.image}
        alt='project'
        style={{
          minWidth: isMobile ? 100 : 400,
          maxHeight: '195px',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'top',
        }}
      />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        }}
      >
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Text
              style={{
                fontSize: '24px',
                fontWeight: '600',
                padding: 'unset',
              }}
            >
              {project.title}
            </Text>
          </Box>

          <Badge color={project.color} variant='outline' size='sm' style={{ minWidth: 'fit-content' }}>
            {project.type}
          </Badge>
        </Box>
        <Box style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.techList.map((tech) => {
            return (
              <Text
                key={tech}
                style={{
                  padding: '2px 8px',
                  borderRadius: '999px',
                  border: '1px solid #e5e5e5',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                {tech}
              </Text>
            )
          })}
        </Box>
        <Box style={{ fontSize: '14px', height: '100%' }}>{project.description}</Box>
      </Box>
    </Box>
  )
}

export default ProjectCard
