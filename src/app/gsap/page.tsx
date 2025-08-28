'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP) // register the hook to avoid React version discrepancies

const Gsap = () => {
  // ref tới section container
  const container = useRef<HTMLElement | null>(null)

  // ref tới timeline GSAP
  const tl = useRef<GSAPTimeline | null>(null)

  const toggleTimeline = () => {
    if (tl.current) {
      tl.current.reversed(!tl.current.reversed())
    }
  }

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>('.box')

      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse()
    },
    { scope: container }
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <section style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }} ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div
          className='box'
          style={{
            backgroundColor: 'pink',
            height: '100px',
            width: '100px',
            borderRadius: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Box 1
        </div>
        <div
          className='box'
          style={{
            backgroundColor: 'cornflowerblue',
            height: '100px',
            width: '100px',
            borderRadius: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Box 2
        </div>
        <div
          className='box'
          style={{
            backgroundColor: 'yellowgreen',
            height: '100px',
            width: '100px',
            borderRadius: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Box 3
        </div>
      </section>
    </div>
  )
}

export default Gsap
