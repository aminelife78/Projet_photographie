import { Navigate } from "react-router-dom"
const AuthVerify = ({children}) => {
  
  if(!localStorage.getItem("token")){
    return <Navigate to="/login" />
  }

  return children

}

export default AuthVerify