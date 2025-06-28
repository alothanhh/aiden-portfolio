'use client'

import { useState } from 'react'
import { Grid } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { ProjectDetailProps, PROJECTS_LIST_DETAIL } from '../../constants/project.constant'

import ModalDetailProject from './modal-detail-project'
import ProjectCard from './project-card'

const ProjectList = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectDetailProps | null>(null)
  const { isMobile } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleViewProject = (index: number) => {
    setSelectedProject(PROJECTS_LIST_DETAIL[index])
    setIsOpen(true)
  }

  return (
    <>
      <Grid
        style={{
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          padding: isMobile ? '32px' : '32px 64px',
        }}
      >
        {PROJECTS_LIST_DETAIL.map((project, index) => (
          <Grid.Col
            key={index}
            span={{ base: 12, md: 6 }}
            onMouseOver={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleViewProject(index)}
          >
            <ProjectCard project={project} opacity={activeCard === index || activeCard === null ? '1' : '0.7'} />
          </Grid.Col>
        ))}
        <Grid.Col
          span={{ base: 12 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '500',
          }}
        >
          And more than 5 assignments/projects at university.
        </Grid.Col>
      </Grid>
      {selectedProject && (
        <ModalDetailProject isOpen={isOpen} onClose={() => setIsOpen(false)} selectedProject={selectedProject} />
      )}
    </>
  )
}

export default ProjectList
