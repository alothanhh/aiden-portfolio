'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Box, Button } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

import ModalDetailProject from '@/components/projects/modal-detail-project'
import { ProjectDetailProps, PROJECTS_LIST, PROJECTS_LIST_DETAIL } from '@/constants/project.constant'
import classes from '@/styles/Button.module.css'

import ProjectCard from './project-card'

const ProjectList = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectDetailProps | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleViewProject = (index: number) => {
    setSelectedProject(PROJECTS_LIST_DETAIL[index])
    setIsOpen(true)
  }

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {PROJECTS_LIST.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleViewProject(index)}
          >
            <ProjectCard project={project} opacity={activeCard === index || activeCard === null ? '1' : '0.5'} />
          </div>
        ))}

        <Link href='/projects' style={{ textDecoration: 'none' }}>
          <Button rightSection={<IconArrowRight size={20} />} className={classes['button-gradient']}>
            See all
          </Button>
        </Link>
      </Box>
      {selectedProject && (
        <ModalDetailProject isOpen={isOpen} onClose={() => setIsOpen(false)} selectedProject={selectedProject} />
      )}
    </>
  )
}

export default ProjectList
