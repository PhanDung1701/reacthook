import Header from "../Header";
import { createContext } from "react";
export const MenuContext = createContext();

function Layout() {
    const menus = ["Home", "About", "Contact"]
    return (
        <>
            <MenuContext.Provider value={{ menus }}>
                <Header />
                <div>Main</div>
                <div>Footer</div>
            </MenuContext.Provider>
        </>
    );
}

export default Layout;