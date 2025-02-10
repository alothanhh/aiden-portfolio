function Title({ text }: { text: string }) {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
    >
      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '48px',
          textAlign: 'center',
        }}
      >
        {text}
      </h1>
      <div
        style={{
          backgroundColor: 'rgb(8, 205, 218)',
          height: 9,
          width: 100,
        }}
      />
    </section>
  )
}

export default Title
