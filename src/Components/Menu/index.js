import { useContext } from "react";
import { MenuContext } from "../Layout";
function Menu() {
    const Menu = useContext(MenuContext);
    return (
        <>
            <ul>
                {Menu.menus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default Menu;