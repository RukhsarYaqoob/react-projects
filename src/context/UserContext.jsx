import React, { createContext, useState ,useMemo} from 'react'
import { food_items } from '../food'
export const dataContext = createContext()
function UserContext({children}) {
  const [cate, setCate] = useState(food_items)
  const [input, setInput] = useState("")
  const [showCard, setShowCard] = useState(false)
  let data = useMemo(() => ({
    input,
    setInput,
    cate,
    setCate,
    showCard,
    setShowCard,
  }), [input,cate,showCard])
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
    
  )
}

export default UserContext