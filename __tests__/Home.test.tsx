import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import AppProvider from '@/providers'
import About from '@/components/home/about'

describe('About section', () => {
  it('My name is Thanh Dang', () => {
    const { getByTestId } = render(
      <AppProvider>
        <About />
      </AppProvider>
    )

    const value = getByTestId('my-name').textContent

    expect(value).toEqual('Thanh Dang')
  })
})
