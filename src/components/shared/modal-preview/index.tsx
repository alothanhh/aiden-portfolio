import ModalWrap from '../modal-wrap'

type TModalPreview = {
  onClose: () => void
  isOpen: boolean
}

export const ModalPreview = ({ isOpen, onClose }: TModalPreview) => {
  return (
    <ModalWrap
      onClose={onClose}
      isOpen={isOpen}
      hideIcClose
      style={{
        padding: 0,
        borderRadius: '0px',
      }}
    >
      {' '}
      <iframe
        src='https://drive.google.com/viewerng/viewer?embedded=true&url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1F_dkdsJavyfOBRY99wx-BdWJN4eaN8D_'
        style={{ width: '100%', height: '100vh' }}
      ></iframe>
    </ModalWrap>
  )
}
