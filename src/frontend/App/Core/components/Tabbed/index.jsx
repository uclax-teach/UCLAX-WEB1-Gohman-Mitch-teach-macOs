import { useState } from "react";
import PropTypes from "prop-types";

// components
import TabList from "./TabList";
import TabContent from "./TabContent";

// component
const Tabbed = ({ tabs }) => {
    const [curTab, setCurTab] = useState(tabs[0]);

    return (
        <div>
            <TabList tabs={tabs} curTab={curTab} setCurTab={setCurTab} />
            <TabContent curTab={curTab} />
        </div>
    );
};

export default Tabbed;

// prop-types
Tabbed.propTypes = {
    tabs: PropTypes.array.isRequired,
};
