// context
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

// components
import Button from "@Core/components/Form/Button/index.jsx";

// component
const SubmitButton = () => {
    const { formStatus } = useUniversalForm();
    return (
        <Button type="submit" disabled={formStatus}>
            {formStatus === "processing" ? "Submitting..." : "Submit"}
        </Button>
    );
};

export default SubmitButton;
