import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import Home from '@/app/page'
import AppProvider from '@/providers'

describe('Page', () => {
  it('renders a heading', () => {
    const { getByTestId } = render(
      <AppProvider>
        <Home />
      </AppProvider>
    )

    const value = getByTestId('heading').textContent

    expect(value).toEqual('Hello World')
  })
})
