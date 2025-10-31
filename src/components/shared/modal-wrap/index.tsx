import { ReactNode } from 'react'
import { Button } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'

// import closeIcon from '@/icons/common/icon-close.svg'

type Props = {
  isOpen?: boolean
  onClose: () => void
  children?: ReactNode
  title?: string
  hideIcClose?: boolean
  className?: string
  blurClassName?: string
  style?: React.CSSProperties
}

const ModalWrap = ({ isOpen = false, onClose, children, title, hideIcClose, style }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
            backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity as needed for backdrop-blur-sm effect.  backdrop-filter is more accurate but browser support varies.
            backdropFilter: 'blur(5px)', // For a more accurate blur effect, but check browser compatibility.
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className='no-scrollbar'
            style={{
              position: 'relative',
              width: '92%',
              maxWidth: '900px',
              maxHeight: '90%',
              overflowY: 'scroll',
              borderRadius: '10px', // Approximates Tailwind's rounded-2xl
              backgroundColor: 'white',
              padding: '16px 24px', // Approximates Tailwind's px-6 py-8
              color: '#0A203D',
              ...style,
            }}
          >
            {!hideIcClose && (
              <Button
                variant='white'
                onClick={onClose}
                style={{ position: 'absolute', right: '16px', top: '16px', zIndex: 20 }}
              >
                <IconX size={24} style={{ opacity: 0.7, transition: 'opacity 0.2s' }} color='black' />
              </Button>
            )}
            {title && <div style={{ marginBottom: '16px' }}>{title}</div>} {/* Added margin for spacing */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalWrap
