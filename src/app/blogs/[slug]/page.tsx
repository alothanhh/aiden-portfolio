const BlogDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  return <div>Blog Detail: {slug}</div>
}

export default BlogDetail
