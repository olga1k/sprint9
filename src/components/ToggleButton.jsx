import { useAppContext } from "../context/AppProvider";

export default function ToggleButton() {

    const { handleThemeSwitch, theme } = useAppContext();

    return (
        <>
        <input type="checkbox" id="switch" onClick={handleThemeSwitch}/><label htmlFor="switch"></label>
        </>
    )
}