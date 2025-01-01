import { useContext } from "react";

// context
import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

// validation
import { valideFormInputs } from "./valideFormInputs.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    const onSubmit = (formInputs) => {
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        // validating form
        const isValid = valideFormInputs(formInputs, actions);
        if (!isValid) {
            actions.setFormStatus("idle");
            return false;
        }

        const postData = Object.fromEntries(
            formInputs.map(({ id, value }) => [id, value])
        );

        console.log(postData);

        actions.setFormStatus("submitted");
        actions.setGlobalMessage({
            type: "success",
            text: "your message has been sent successfully.",
        });
    };

    return {
        ...state,
        setFormInput: actions.setFormInput,
        onSubmit,
    };
};
