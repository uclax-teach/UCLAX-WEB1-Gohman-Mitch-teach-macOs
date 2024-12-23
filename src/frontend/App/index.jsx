import { useState } from "react";
import styled from "styled-components";

const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 30px;
        color: #784a00;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #014b4b;
    }
`;

const SunAndMoon = () => {
    const [srcState, setSrcState] = useState("/assets/sunAndMoon/moon.png");

    const changeToSun = () => {
        setSrcState("/assets/sunAndMoon/sun.png");
    };
    const changeToMoon = () => {
        setSrcState("/assets/sunAndMoon/moon.png");
    };

    return (
        <SunAndMoonStyled>
            <h2>Sun and Moon</h2>
            <img
                src={srcState}
                alt="Sun and Moon"
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;
