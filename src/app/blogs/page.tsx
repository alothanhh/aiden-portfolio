'use client'
import { useEffect, useState } from 'react'
import { Flex } from '@mantine/core'

import { BlogBody, BlogHero } from './_components'

interface BlogPost {
  sys: { id: string }
  title: string
  slug: string
  subtitle?: string
}

const Blogs = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog-posts')
      const data = await res.json()
      setPosts(data.posts)
    }

    fetchPosts()
  }, [])

  return (
    <Flex direction='column' gap='sm' w='100%'>
      <BlogHero />
      <BlogBody />
    </Flex>
  )
}

export default Blogs
