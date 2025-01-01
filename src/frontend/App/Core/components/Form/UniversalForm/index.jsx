import { useReducer, useMemo } from "react";
import PropTypes from "prop-types";

// context
import UniversalFormContext from "./context";
import { reducer } from "./context/reducer";

// components
import FormTemplate from "./components/FormTemplate";

// component
const UniversalForm = ({ formInputs, apiEndpoint, trackingId }) => {
    const stateProps = {
        apiEndpoint,
        trackingId,
        formInputs,
    };

    // Whatever you want to manage as internal state
    const [state, dispatch] = useReducer(reducer, stateProps);

    // useMemo so it does not pass value on every render
    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <UniversalFormContext.Provider value={value}>
            <FormTemplate />
        </UniversalFormContext.Provider>
    );
};

export default UniversalForm;

// prop-types
UniversalForm.propTypes = {
    formInputs: PropTypes.array.isRequired,
    apiEndpoint: PropTypes.string.isRequired,
    trackingId: PropTypes.string.isRequired,
};
