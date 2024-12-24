import PrimaryMenu from "@App/Routes/PrimaryMenu";
import styled from "styled-components";

//styles
const HeaderStyled = styled.header`
    nav {
        padding: 10px;
        margin: 5px;

        a {
            display: inline-block;
            margin-right: 10px;
            color: white;
        }
    }
`;

// component
const Header = () => {
    return (
        <HeaderStyled>
            Header
            <PrimaryMenu />
        </HeaderStyled>
    );
};

export default Header;
