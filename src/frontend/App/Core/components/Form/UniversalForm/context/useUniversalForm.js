import { useContext } from "react";

// context
import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

// utils
import { validateFormInputs } from "./validateFormInputs";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    const onSubmit = async (formInputs) => {
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        // Validate Form
        const valid = validateFormInputs(formInputs, actions);
        if (!valid) {
            actions.setFormStatus("idle");
            return false;
        }

        // Convert User Data to API Post Data Object
        const postData = Object.fromEntries(
            formInputs.map(({ id, value }) => [id, value])
        );

        console.log({ postData });

        actions.setFormStatus("submitted");
        actions.setGlobalMessage({
            type: "success",
            text: "Your message has been sent successfully.",
        });
    };

    return {
        ...state,
        setFormInput: actions.setFormInput,
        onSubmit,
    };
};
