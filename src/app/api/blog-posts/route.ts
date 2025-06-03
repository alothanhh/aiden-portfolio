// app/api/blog-posts/route.ts

import { NextResponse } from 'next/server'

const GRAPHQL_ENDPOINT = process.env.CONTENTFUL_GRAPHQL_ENDPOINT!
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!

const GET_ALL_BLOG_POSTS = `
  query {
    pageBlogPostCollection(order: publishedDate_DESC) {
      items {
        sys {
          id
        }
        title
      }
    }
  }
`

export async function GET() {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: GET_ALL_BLOG_POSTS }),
    })

    const { data, errors } = await response.json()

    if (errors) {
      console.error(errors)
      return NextResponse.json({ errors }, { status: 500 })
    }

    return NextResponse.json({ posts: data.pageBlogPostCollection.items })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
