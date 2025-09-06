
import React, {createContext, useContext, useState} from 'react'
const Ctx = createContext<any>(null)
export function useTheme(){ return useContext(Ctx) }
export default function ThemeContextProvider({children}: any){
  const [state,setState] = useState<any>({})
  return <Ctx.Provider value={state,setState}>{children}</Ctx.Provider>
}
