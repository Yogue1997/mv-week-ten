import { useState } from "react";
import { createContext } from "react";


export const ThemeProdiver = createContext("default value")





function Theme({children}) {

    const [show, setShow] = useState(false)

    return (
        <ThemeProdiver.Provider value={{show, setShow}}>
            {children}
        </ThemeProdiver.Provider>
    )
}

export default Theme