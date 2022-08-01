import { useContext } from "react"
import { ThemeProdiver } from "../context/Theme"



function Home () {

    const context = useContext(ThemeProdiver)
    
    const {show, setShow} = context


    console.log(show);

    return(
        <div>
            <p>Home</p>
        </div>
    )
}

export default Home