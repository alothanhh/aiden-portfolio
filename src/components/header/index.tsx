'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useMemo } from 'react'
import { Box, Flex, rem, Text } from '@mantine/core'
import { Burger, Drawer } from '@mantine/core'
import { useHeadroom } from '@mantine/hooks'
import { useDisclosure } from '@mantine/hooks'

import { LIST_HEADER_ITEM } from '@/constants/header.constant'

import HeaderSection from './header-section'

function Header() {
  const pinned = useHeadroom({ fixedAt: 120 })
  const [opened, { toggle, close }] = useDisclosure()
  const pathName = usePathname()

  const isRootPage = useMemo(() => pathName === '/', [pathName])
  return (
    <>
      <Box
        style={{
          position: 'sticky',
          top: 0,
          padding: 'var(--mantine-spacing-xs)',
          height: rem(70),
          zIndex: 10,
          transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
          transition: 'transform 400ms ease',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '3%',
          paddingRight: '3%',
        }}
      >
        <Link href='/' style={{ textDecoration: 'none' }}>
          <Box style={{ display: 'flex' }}>
            <div
              style={{
                backgroundImage: 'var(--primary-color)',
                width: '7px',
              }}
            />

            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2em',
                paddingLeft: '5px',
              }}
            >
              Portfolio.
            </Text>
          </Box>
        </Link>
        <Flex
          visibleFrom='md'
          direction={{ sm: 'row' }}
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
          align={{ sm: 'center' }}
          display={isRootPage ? 'flex' : 'none'}
        >
          {LIST_HEADER_ITEM.map((item, index) => (
            <HeaderSection item={item} key={index} onClose={close} />
          ))}
        </Flex>
        <Burger
          hiddenFrom='md'
          color='white'
          display={isRootPage ? 'flex' : 'none'}
          opened={opened}
          onClick={toggle}
          aria-label='Toggle navigation'
        />
      </Box>
      <Drawer
        padding='0'
        opened={opened}
        onClose={close}
        size='xs'
        position='left'
        withCloseButton={false}
        style={{ zIndex: 1 }}
      >
        <Flex
          justify='center'
          direction='column'
          gap='xl'
          style={{
            backgroundColor: 'black',
            height: '100vh',
          }}
        >
          {LIST_HEADER_ITEM.map((item, index) => (
            <HeaderSection item={item} key={index} onClose={close} />
          ))}
        </Flex>
      </Drawer>
    </>
  )
}

export default Header
