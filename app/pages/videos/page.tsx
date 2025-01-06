import { pagePadding } from '@/app/styles/styles'
import React from 'react'

const page = () => {
  return (
    <div className={`${pagePadding} min-h-screen`}>
      {/* <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
  src="https://www.youtube.com/embed/V7z7BAZdt2M?si=tUzsIrmBHN_OFNnu&autoplay=1&mute=1"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div> */}


      {/* <iframe
  src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/video.php?v=14m5jye5P7"
  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe> */}

      {/* <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/Jr6n9TogN0o"  // Updated embed URL
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  )
}

export default page
