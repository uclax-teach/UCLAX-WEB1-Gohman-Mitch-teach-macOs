import { useState, useEffect } from "react";

// components
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";

// component
const Small = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        // cleanup function
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [showMenu]);

    return (
        <div>
            <Hamburger onClick={toggleMenu} />
            <Logo />
            {showMenu && <PrimaryMenu />}
        </div>
    );
};

export default Small;
