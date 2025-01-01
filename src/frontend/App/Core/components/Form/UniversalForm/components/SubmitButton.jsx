// context
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

// components
import Button from "@Core/components/Form/Button";

// component
const SubmitButton = () => {
    const { formStatus, submitText } = useUniversalForm();
    const text = formStatus === "processing" ? "Submitting..." : submitText;
    return <Button type="submit">{text}</Button>;
};

export default SubmitButton;
