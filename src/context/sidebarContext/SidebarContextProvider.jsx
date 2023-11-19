import React, { useState } from 'react'
import sidebarContext from './sidebarContext'

const SidebarContextProvider = ({children}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <sidebarContext.Provider value={{clicked, setClicked}}>
    {children}
    </sidebarContext.Provider>
  )
}

export default SidebarContextProvider