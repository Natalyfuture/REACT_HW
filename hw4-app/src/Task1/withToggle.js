import { useState } from "react";

export const withToggle = (WrappedComponent) => {
    return (props) => {
        const [toggled, setToggled] = useState(false);

        const changeToggle = () => {
            setToggled(!toggled)
        }

    return <WrappedComponent {...props} toggled={toggled} changeToggle={changeToggle} />
    }
}