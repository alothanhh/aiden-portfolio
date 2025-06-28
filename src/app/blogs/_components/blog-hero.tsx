import { Flex, Text } from '@mantine/core'
import { motion } from 'framer-motion'

import heroImage from '@/assets/images/blogs/hero-image.jpg'

export const BlogHero = () => {
  return (
    <Flex
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      direction='column'
      gap='sm'
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      pos='relative'
      h='330px'
      w='100%'
    >
      <Flex
        direction='column'
        p='2rem'
        h='100%'
        w='100%'
        justify='flex-end'
        align='center'
        c='white'
        gap='sm'
        bg='linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.02) 100%)'
      >
        <Text size='32px' fw={700}>
          Blogs
        </Text>
        <Text size='16px'>Discover tech insights, tutorials, and coding tips</Text>
      </Flex>
    </Flex>
  )
}
