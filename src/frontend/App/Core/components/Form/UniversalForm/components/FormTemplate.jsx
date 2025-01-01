// components
import Message from "./Message";
import Form from "./Form";
import Inputs from "./Inputs";
import SubmitButton from "./SubmitButton";

// component
const FormTemplate = () => {
    return (
        <div>
            <Message />
            <Form>
                <Inputs />
                <SubmitButton />
            </Form>
        </div>
    );
};

export default FormTemplate;
