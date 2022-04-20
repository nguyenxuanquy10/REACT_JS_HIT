import { ThemeContext } from "./App"
import { useContext } from "react"
const Paragraph=()=>{
    const theme=useContext(ThemeContext)
    return (
        <div className={theme}>
            <p >lorem ipsum dolor sit am</p>
        </div>

    )
}
export default Paragraph