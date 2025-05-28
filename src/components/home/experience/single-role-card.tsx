import Image from 'next/image'

import { Badge, Flex, Text } from '@mantine/core'

import useWindowSize from '@/hooks/use-window-size'

import { SingleRoleExperienceProps } from '../../../constants/experience.constant'

const SingleRoleCard = ({ experience }: { experience: SingleRoleExperienceProps }) => {
  const { isMobile } = useWindowSize()

  return (
    <Flex
      gap={isMobile ? '0' : 'md'}
      direction={isMobile ? 'column' : 'row'}
      style={{
        padding: '20px',
        width: '100%',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)',
      }}
    >
      <Image src={experience.logo} alt='logo' width={64} />

      <Flex
        direction='column'
        style={{
          width: '100%',
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
            {experience.title}
          </Text>
        </Flex>
        <Text size='lg'>{experience.company_name}</Text>
        <Text size='md' c='gray'>
          {experience.date}
        </Text>
        <Text size='md' c='gray' visibleFrom='md'>
          {experience.location}
        </Text>

        <Flex direction='column' gap='xs' mt={10}>
          {experience.description.map((description, index) => (
            <Text key={index} size='md'>
              {description}
            </Text>
          ))}
        </Flex>

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

export default SingleRoleCard
