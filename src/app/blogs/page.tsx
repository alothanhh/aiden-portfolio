'use client'
import { useEffect, useState } from 'react'

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
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
