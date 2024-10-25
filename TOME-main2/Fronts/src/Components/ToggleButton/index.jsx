import { useState } from "react";
import { Toggle } from "./style.js";


export default function ToggleButton() {
    const ToggleButton = ({ isOn, handle }) => {
        return <Toggle isOn={isOn} onClick={handle} >
            
        </Toggle>
    }
    const [isOn, setIsOn] = useState(false)
    const handleToggle = () => setIsOn(prev => !prev)
    return (
        <div>
            <ToggleButton isOn={isOn} handle={handleToggle} />
        </div>
    )
}

