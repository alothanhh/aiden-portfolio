'use client'
import Link from 'next/link'

import { FC, SVGProps, useMemo, useState } from 'react'
import { Flex, Text } from '@mantine/core'

type Props = { logo: FC<SVGProps<SVGElement>>; title: string; description: string }

function ContactCard({ logo, title, description }: Props) {
  const Logo = logo
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const iconColor = useMemo(() => (isHovered ? 'rgb(8, 205, 218)' : 'rgb(26, 247, 169)'), [isHovered])

  return (
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          padding: '22px 16px',
          backgroundColor: '#F7F7F7',
          borderRadius: '8px',
          width: '100%',
          display: 'flex',
          gap: '16px',
          flexDirection: 'row',
          alignItems: 'center',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Image src={logo} alt="logo" width={24} height={24} /> */}
          {/* <Logo />
           */}
          <Logo fill={iconColor} />
        </div>
        <div>
          <Text style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 700 }}>{title}</Text>

          {description !== 'SOCIAL_LIST' ? (
            <Text style={{ fontSize: '14px', lineHeight: '20px', marginBottom: '8px' }}>{description}</Text>
          ) : (
            <Flex gap='4px'>
              <Link href='https://www.linkedin.com/in/thanh-dangquang/' target='_blank' className='gradient-text'>
                Linkedin
              </Link>
              <Text> | </Text>
              <Link href='https://t.me/aidendang' target='_blank' className='gradient-text'>
                Telegram
              </Link>
              <Text> | </Text>
              <Link href='https://www.facebook.com/alo.thanhh' target='_blank' className='gradient-text'>
                Facebook
              </Link>
            </Flex>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactCard
