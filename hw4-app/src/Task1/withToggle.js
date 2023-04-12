import { useState } from "react";

export const withToggle = (WrappedComponent) => {
    return (props) => {
        const [toggled, setToggled] = useState(false);

        const changeToggle = () => {
            setToggled(prev => !prev)
        }

    return <WrappedComponent {...props} toggled={toggled} changeToggle={changeToggle} />
    }
}