import { useContext } from 'react'
import { Box, Flex } from '@mantine/core'

import ScrollFadeUp from '@/components/shared/scroll-fade-up'
import { ScrollContext } from '@/contexts/scroll.context'
import useWindowSize from '@/hooks/use-window-size'

import { ATOM, XELEX } from '../../../constants/experience.constant'
import Title from '../../common/Title'

import MultiRoleCard from './multi-role-card'
import SingleRoleCard from './single-role-card'

const Experience = () => {
  const { isMobile } = useWindowSize()
  const { targetRef, targetId } = useContext(ScrollContext)

  return (
    <ScrollFadeUp repeat>
      <Box
        id='experience'
        ref={targetId === 'experience' ? targetRef : null}
        style={{
          backgroundColor: '#F7F7F7',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '32px',
          alignItems: 'center',
          padding: isMobile ? '32px 16px' : '40px 32px',
        }}
      >
        <Title text='EXPERIENCE' />

        <Flex
          direction='column'
          align='center'
          style={{
            maxWidth: '992px',
            width: '100%',
          }}
          gap='md'
        >
          <MultiRoleCard experience={ATOM} />
          <SingleRoleCard experience={XELEX} />
        </Flex>
      </Box>
    </ScrollFadeUp>
  )
}

export default Experience