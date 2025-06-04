'use client'
import { useEffect, useState } from 'react'
import { Flex } from '@mantine/core'

interface BlogPost {
  sys: { id: string }
  title: string
  slug: string
  subtitle?: string
}

const Blogs = () => {
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
    <Flex direction='column' gap='sm' style={{ padding: '2rem' }}>
      <h3>I have used Contentful and GraphQl to create this page. I&apos;ll be adding more content soon.</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </Flex>
  )
}

export default Blogs
