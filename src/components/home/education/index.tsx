'use client'

import { Box, Flex, List, Text, ThemeIcon } from '@mantine/core'
import { IconAward, IconBriefcase, IconCertificate } from '@tabler/icons-react'

import Title from '@/components/common/Title'
import ScrollFadeUp from '@/components/shared/scroll-fade-up'
import useWindowSize from '@/hooks/use-window-size'

const Education = () => {
  const { isMobile } = useWindowSize()

  return (
    <ScrollFadeUp repeat>
      <Flex
        id='education'
        align='center'
        justify='center'
        p={isMobile ? 'md' : 'xl'}
        gap={isMobile ? '0' : 'md'}
        direction='column'
        style={{
          width: '100%',
        }}
      >
        <Title text='EDUCATION' />

        <Flex
          direction='column'
          style={{
            width: '100%',
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
            maxWidth: '1000px',
          }}
        >
          <Flex
            direction={isMobile ? 'column' : 'row'}
            justify='space-between'
            style={{
              width: '100%',
            }}
          >
            <Text size='xl' fw={600}>
              Ho Chi Minh City University of Technology (HCMUT)
            </Text>

            <Text size='lg' fw={600}>
              Oct 2020 - Nov 2024
            </Text>
          </Flex>

          <List listStyleType='disc' style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <List.Item>
              <Text size='md'>B.E. Computer Science</Text>
            </List.Item>
            <List.Item>
              <Box style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Text size='md'>Very Good degree - GPA: 3.4/4</Text>{' '}
              </Box>
            </List.Item>
          </List>

          {/* Achievement */}
          <Flex direction='column' gap='xs'>
            {/* Certificate */}
            <Text size='lg' fw={600} mt={10}>
              Certificates
            </Text>
            <List
              icon={
                <ThemeIcon size={24} radius='xl' variant='transparent' color='black'>
                  <IconCertificate size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size='md'>TOEIC Reading & Listening | Score: 810</Text>
              </List.Item>

              <List.Item>
                <Text size='md'>Software Development with Scrum Certificate</Text>
                <Text size='sm' c='gray'>
                  Certified by Axon Active
                </Text>
              </List.Item>
            </List>

            <Text size='lg' fw={600}>
              Achievement
            </Text>
            <List
              icon={
                <ThemeIcon size={24} radius='xl' variant='transparent' color='black'>
                  <IconAward size={16} />
                </ThemeIcon>
              }
            >
              <List.Item
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Text size='md'>Academic Encouragement Scholarship (2024)</Text>
              </List.Item>
              <List.Item>
                <Text size='md'>Student with Five Good Merits Award (HCM City Level)</Text>
              </List.Item>
              <List.Item>
                <Text size='md'>Fossil Scholarship, CSE Alumni Scholarship</Text>
              </List.Item>
            </List>

            {/* Extracurricular Activity */}
            <Text size='lg' fw={600}>
              Extracurricular Activity
            </Text>
            <List
              icon={
                <ThemeIcon size={24} radius='xl' variant='transparent' color='black'>
                  <IconBriefcase size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Text size='md'>CSE Multimedia</Text>
                <Text size='sm' c='gray' style={{ display: 'flex', flexDirection: 'column' }}>
                  Lead of design team: Design media publications and other products for events such as the CSE Job Fair,
                  the Green Summer Volunteer Campaign, etc
                </Text>
              </List.Item>

              <List.Item>
                <Text size='md'>Spring Volunteer Campaign of CSE Faculty 2020 - 2021</Text>
                <Text size='sm' c='gray'>
                  Volunteer: Support less fortunate people and primary students
                </Text>
              </List.Item>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </ScrollFadeUp>
  )
}

export default Education
