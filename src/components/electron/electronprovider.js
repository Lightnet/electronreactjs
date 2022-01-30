/*
 
 */

// https://kentcdodds.com/blog/how-to-use-react-context-effectively


import React, { createContext, useMemo, useState } from "react";

export const electronContext = createContext();


export function useElectron(){
  const context = useContext(electronContext);
  if (!context) {
    throw new Error(`useElectron must be used within a UserContext`)
  }
  return context;
}

export function ElectronProvider(props){

  const [isApp, setIsApp] = useState();

  const value = useMemo(()=>({
    isApp, setIsApp
  }),[
    isApp
  ])

  return <>
  <MyContext.Provider value={value/* some value */} {...props} />
  </>
}