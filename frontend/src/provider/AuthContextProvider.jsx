/* eslint-disable react/prop-types */
import { useState } from "react"
import AuthContext from "../context/AuthContext"

const AuthContextProvider = ({Children}) => {
    const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider