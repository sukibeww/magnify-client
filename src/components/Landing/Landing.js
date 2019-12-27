import React, { useContext } from 'react'
import DesktopLanding from './DesktopLanding'
import MobileLanding from './MobileLanding'
import { MediaContext } from '../../context/mediaContext'

function AppEmployee(props) {
  const mediaContext = useContext(MediaContext);
  const { media } = mediaContext;
  return (
    <>
      {media && <DesktopLanding media={media} />}
      {!media && <MobileLanding media={media} />}
    </>
  )
}

export default AppEmployee