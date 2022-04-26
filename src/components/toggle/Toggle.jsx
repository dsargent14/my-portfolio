import { useContext } from "react"
import { ThemeContext } from "../../context"
import  "./toggle.css"
// import sun image and mooon

const Toggle = () => {
    const theme= useContext(ThemeContext)
    const handleClick= () =>{
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className="t">

<div className="t-button" onClick={handleClick} style= {{left: theme.state.darkMode ? 0 :25 }}></div>
    </div>
  )
}

export default Toggle