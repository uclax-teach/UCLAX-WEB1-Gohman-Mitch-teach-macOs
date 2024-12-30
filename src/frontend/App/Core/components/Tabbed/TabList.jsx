import PropTypes from "prop-types";

// components
import TabItem from "./TabItem";

// component
const TabList = ({ tabs, curTab, setCurTab }) => {
    return (
        <div>
            {tabs.map((tab) => {
                return (
                    <TabItem
                        key={tab.id}
                        tab={tab}
                        curTab={curTab}
                        setCurTab={setCurTab}
                    />
                );
            })}
        </div>
    );
};

export default TabList;

// prop-types
TabList.propTypes = {
    tabs: PropTypes.array.isRequired,
    curTab: PropTypes.object.isRequired,
    setCurTab: PropTypes.func.isRequired,
};
