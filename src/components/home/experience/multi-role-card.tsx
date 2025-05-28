import Image from 'next/image'

import { Badge, Flex, Text, ThemeIcon, Timeline } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { MultiRoleExperienceProps } from '../../../constants/experience.constant'

const MultiRoleCard = ({ experience }: { experience: MultiRoleExperienceProps }) => {
  const { isMobile } = useWindowSize()

  return (
    <Flex
      gap='md'
      w='100%'
      direction={isMobile ? 'column' : 'row'}
      style={{
        padding: '20px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
      }}
    >
      <Image src={experience.logo} alt='logo' width={64} />

      <Flex direction='column' w='100%'>
        <Text size='xl' fw={600}>
          {experience.company_name}
        </Text>
        <Text size='md' c='gray' visibleFrom='md'>
          {experience.location}
        </Text>

        <Timeline active={1} bulletSize={16} lineWidth={2} color='rgb(26, 247, 169)' pt='lg'>
          {experience.roles.map((role) => (
            <Timeline.Item
              key={role.title}
              fz='lg'
              title={role.title}
              bullet={
                <ThemeIcon
                  size={16}
                  variant='gradient'
                  gradient={{
                    from: 'rgb(26, 247, 169)',
                    to: 'rgb(8, 205, 218)',
                  }}
                  radius='xl'
                ></ThemeIcon>
              }
            >
              <Text size='md' c='gray'>
                {role.date}
              </Text>
              <Flex direction='column' gap={4}>
                {role.description.map((desc, index) => (
                  <Text size='md' key={index}>
                    {desc}
                  </Text>
                ))}
              </Flex>
            </Timeline.Item>
          ))}
        </Timeline>

        <Flex gap='xs' mt={10}>
          {experience.tags.map((tag, index) => (
            <Badge color='rgb(8, 205, 218)' variant='light' radius='xl' key={index}>
              {tag}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default MultiRoleCard
