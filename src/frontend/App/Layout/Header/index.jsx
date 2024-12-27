import { useMediaQuery } from "@App/Theme/media/MediaQueryContext";

// components
import Small from "./Small";
import MediumLarge from "./MediumLarge";

// component
const Header = () => {
    const { jsMedia } = useMediaQuery();
    return <header>{jsMedia.isSmall ? <Small /> : <MediumLarge />}</header>;
};

export default Header;
