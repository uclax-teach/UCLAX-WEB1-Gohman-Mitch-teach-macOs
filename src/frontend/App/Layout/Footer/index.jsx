import styled from "styled-components";

// components
import Logo from "./Logo";
import SiteInfo from "./SiteInfo";
import Copyright from "./Copyright";

//styles
const FooterStyled = styled.div`
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.light};
`;

// component
const Footer = () => {
    return (
        <FooterStyled>
            <Logo />
            <SiteInfo />
            <Copyright />
        </FooterStyled>
    );
};

export default Footer;
