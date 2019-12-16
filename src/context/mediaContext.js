import React, { createContext, useState, useEffect } from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const MediaContext = createContext()

const MediaContextProvider = props => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up('lg'));
  const [media, setMedia] = useState(large)
  useEffect(() => {
    console.log("effect")
    console.log(large)
    setMedia(large)
  }, [large])

  console.log("context")
  console.log(large)
  return (
    <MediaContext.Provider value={{media}}>
      {props.children}
    </MediaContext.Provider>
  )
}

export default MediaContextProvider
