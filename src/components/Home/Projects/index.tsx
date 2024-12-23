'use client'
import { Box, Button, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import ProjectList from "./ProjectList";
import { IconArrowNarrowUp, IconArrowRight } from "@tabler/icons-react";
import useWindowSize from "@/hooks/use-window-size";
import { useContext } from "react";
import { ScrollContext } from "@/contexts/ScrollContext";
import Link from "next/link";
import classes from '@/styles/Button.module.css'

const Projects = () => {
    const { isMobile } = useWindowSize()
    const { targetRef, targetId } = useContext(ScrollContext);

    return (
        <Box
            id="projects"
            ref={targetId === 'projects' ? targetRef : null}
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : '',
                gap: '32px',
                padding: isMobile ? '32px 16px' : '32px',
                alignContent: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(247, 247, 247)'
            }}
        >
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobile ? 'center' : '',
                gap: '8px',
                width: 'max-content'
            }}>
                <Title>PROJECTS</Title>
                <Text size="md">A curated selection of my web projects.</Text>
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                    <Button
                        rightSection={<IconArrowRight size={20} />}
                        className={classes['button-gradient']}
                        style={{
                            display: isMobile ? 'none' : 'flex',
                        }}>See all</Button>
                </Link>
            </Box>

            <ProjectList />
        </Box >
    );
};

export default Projects;