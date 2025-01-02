import { useContext } from "react";

// spam
import { useSpamBuster } from "@Core/components/Form/SpamBuster/useSpamBuster";

// api
import axios from "@App/Core/axios.js";

// context
import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

// validation
import { valideFormInputs } from "./valideFormInputs.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);
    const { trackingId, apiEndpoint } = state;
    const { getToken } = useSpamBuster(trackingId);

    const onSubmit = async (formInputs) => {
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        // validating form
        const isValid = valideFormInputs(formInputs, actions);
        if (!isValid) {
            actions.setFormStatus("idle");
            return false;
        }

        // validate human - recaptcha
        const { success, message, token } = await getToken();
        if (!success) {
            actions.setFormStatus("idle");
            actions.setGlobalMessage({
                type: "error",
                text: `${message}. Please check form and try again.`,
            });
            return false;
        }

        const postData = {
            token: token,
            ...Object.fromEntries(
                formInputs.map(({ id, value }) => [id, value])
            ),
        };

        const resp = await axios.post(apiEndpoint, postData);

        if (resp?.data?.success) {
            actions.setFormStatus("submitted");
            actions.setGlobalMessage({
                type: "success",
                text: "Your message has been sent successfully.",
            });
        } else {
            console.error(resp);
            actions.setFormStatus("idle");
            actions.setGlobalMessage({
                type: "error",
                text: "There was an error in processing your form. Please check the form and try again.",
            });
        }
    };

    return {
        ...state,
        setFormInput: actions.setFormInput,
        onSubmit,
    };
};
