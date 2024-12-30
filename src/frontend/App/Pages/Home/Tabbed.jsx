import { useState, useEffect } from "react";
import styled from "styled-components";

// api
import axios from "@App/Core/axios";

// components
import Preloader from "@App/Core/components/Preloader";
import CoreTabbed from "@App/Core/components/Tabbed";

//styles
const TabbedStyled = styled.div`
    margin: 50px 0px 0px;
`;

// component
const Tabbed = () => {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const fetchTabs = async () => {
            const resp = await axios.get(`/tabs`);
            setTabs(resp.data);
        };

        fetchTabs();
    }, []);

    if (tabs.length === 0) return <Preloader />;

    return (
        <TabbedStyled>
            <CoreTabbed tabs={tabs} />
        </TabbedStyled>
    );
};

export default Tabbed;
