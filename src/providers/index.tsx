import { ReactNode } from 'react'

import MantineRegistry from './mantine.provider'
import ToastProvider from './toast.provider'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineRegistry>
      <ToastProvider>{children}</ToastProvider>
    </MantineRegistry>
  )
}

export default AppProvider
