'use client'

const CvPreview = () => {
  return (
    <div
      className='no-scrollbar'
      style={{
        zIndex: 999,
        position: 'fixed',
        inset: 0,
      }}
    >
      {/* <iframe
                src="/cv/CV_Thanh_Dang.pdf"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
            ></iframe> */}

      <iframe
        src='https://drive.google.com/viewerng/viewer?embedded=true&url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1JFLbb0wovv6XWSHUs19_gPdn7OlB9Qkx'
        style={{ width: '100%', height: '100vh' }}
      ></iframe>
    </div>
  )
}

export default CvPreview
