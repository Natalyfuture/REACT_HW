import { useState } from "react";

export const useToggler = (initialState) => {
    const [toggled, setToggled] = useState(initialState);

    const changeToggler = () => {
        setToggled(prev => !prev)
    }

    return {toggled, changeToggler}
}
