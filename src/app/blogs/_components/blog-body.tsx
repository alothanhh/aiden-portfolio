import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { Badge, Button, Card, CloseButton, Flex, Grid, Group, Image, Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

const topics = ['All', 'Frontend', 'Next', 'React', 'Interview']

type BlogCardProps = {
  title: string
  author: {
    name: string
  }
  slug: string
  publishedDate: string
  featuredImage: {
    url: string
  }
}

export const BlogBody = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)
  const router = useRouter()

  const toggleTopic = (topic: string) => {
    setSelectedTopics((current) => (current.includes(topic) ? current.filter((t) => t !== topic) : [...current, topic]))
  }

  const [posts, setPosts] = useState<BlogCardProps[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog-posts')
      const data = await res.json()
      setPosts(data.posts as BlogCardProps[])
    }

    fetchPosts()
  }, [])

  return (
    <Flex direction='column' align='center' gap='lg' m='xl'>
      <Group justify='center'>
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic)

          return (
            <Badge
              size='lg'
              key={topic}
              onClick={() => toggleTopic(topic)}
              color='rgb(8, 205, 218)'
              variant={isSelected ? 'filled' : 'outline'}
              style={{
                cursor: 'pointer',
              }}
            >
              {topic}
            </Badge>
          )
        })}
      </Group>

      <TextInput
        placeholder='Search blog topics...'
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        leftSection={<IconSearch size={16} />}
        rightSection={
          <CloseButton
            aria-label='Clear input'
            onClick={() => setSearch('')}
            style={{ display: search ? undefined : 'none' }}
          />
        }
        radius='md'
        size='md'
        style={{ width: '100%' }}
      />

      <Grid justify='center' align='center'>
        {posts.map((post) => {
          const date = new Date(post.publishedDate)
          const formattedDate = date.toLocaleDateString('en-GB')

          const isOther = hovered !== null && hovered !== post.title

          return (
            <Grid.Col key={post.title} span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                onClick={() => router.push(`/blogs/${post.slug}`)}
                shadow='md'
                padding='lg'
                radius='md'
                withBorder
                w='100%'
                h='330px'
                onMouseEnter={() => setHovered(post.title)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  transition: 'opacity 0.3s ease',
                  opacity: isOther ? 0.5 : 1,
                  cursor: 'pointer',
                }}
              >
                <Card.Section>
                  <Image src={post.featuredImage.url} height={160} alt={post.title} />
                </Card.Section>

                <Text fw={500} size='lg' mt='md' lineClamp={2}>
                  {post.title}
                </Text>

                <Group mt='xs' mb='md' justify='space-between' display={'flex'}>
                  <Text size='sm' c='dimmed'>
                    By {post.author.name}
                  </Text>
                  <Badge color='gray' variant='light'>
                    {formattedDate}
                  </Badge>
                </Group>

                <Button variant='light' c='var(----primary-color)' fullWidth>
                  Read more
                </Button>
              </Card>
            </Grid.Col>
          )
        })}
      </Grid>
    </Flex>
  )
}
