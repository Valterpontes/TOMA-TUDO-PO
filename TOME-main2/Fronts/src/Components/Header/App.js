import { Toggle } from "./style.js";
import styled from "styled-components"
import { useState } from "react";


export default function App() {
    const [isOn, setIsOn] = useState(false)
    const handleToggle = () => setIsOn(prev => !prev)
    return (
        <div>
            <ToggleButton isOn={isOn} handle={handleToggle} />
        </div>
    )
}

const ToggleButton = ({ isOn, handle }) => {
    return <Toggle isOn={isOn} onClick={handle} />

}







export const Toggle = styled.div`
    width: 90px;
    height: 40px;
    margin: 10px 0;
    border-radius: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: ${(props) => (props.isOn === true ? 'green' : 'black')};
    transition: background-color 500ms linear;
    
    &:before {
        content: '${(props) => (props.isOn === true ? 'I' : 'O')}';
        width: 35px;
        height: 35px;
        background-color: white;
        border-radius: 50%;
        margin: 0 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: ${(props) => (props.isOn === true ? '51px' : '0')};
        transition: left 500ms linear;
        }
`




