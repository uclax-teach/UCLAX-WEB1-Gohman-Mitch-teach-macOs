import { useContext } from "react";

// context
import UniversalFormContext from "./";
import { createActions } from "./actions";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    return {
        ...state,
        setFormInput: actions.setFormInput,
    };
};
