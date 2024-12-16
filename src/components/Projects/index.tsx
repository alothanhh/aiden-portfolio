'use client'
import { Box, Button, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import ProjectList from "./ProjectList";
import { IconArrowNarrowUp, IconArrowRight } from "@tabler/icons-react";
import useWindowSize from "@/hooks/use-window-size";

const Projects = () => {
    const { hovered, ref } = useHover<HTMLButtonElement>();
    const { isMobile } = useWindowSize()

    return (
        <div>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : '',
                    gap: '32px',
                    margin: '32px 0',
                    padding: '32px',
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
                    <Button
                        ref={ref}
                        rightSection={<IconArrowRight size={20} />}
                        style={{
                            width: 'max-content',
                            display: isMobile ? 'none' : 'flex',
                            backgroundSize: '200%',
                            transition: 'background-position 0.8s ease, color 0.3s ease',
                            backgroundImage: hovered
                                ? 'linear-gradient(90deg, rgb(26, 247, 169), rgb(8, 205, 218), rgb(26, 247, 169))'
                                : 'linear-gradient(90deg, rgb(8, 205, 218), rgb(26, 247, 169), rgb(8, 205, 218))',
                            backgroundPosition: hovered ? '100% 0' : '0% 0',
                        }} color="rgb(26, 247, 169)">See all</Button>
                </Box>

                <ProjectList />
            </Box>
        </div>
    );
};

export default Projects;