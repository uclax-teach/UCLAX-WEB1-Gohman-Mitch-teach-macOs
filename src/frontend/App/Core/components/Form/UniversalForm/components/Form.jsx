import PropTypes from "prop-types";
import styled from "styled-components";

// context
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

//styles
const FormStyled = styled.form`
    padding: 20px 30px;
    background-color: ${({ theme }) => theme.colors.primary.medium};
`;

// component
const Form = ({ children }) => {
    const { formInputs, onSubmit, formStatus } = useUniversalForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formInputs);
    };

    if (formStatus === "submitted") return null;

    return <FormStyled onSubmit={handleSubmit}>{children}</FormStyled>;
};

export default Form;

// prop-types
Form.propTypes = {
    children: PropTypes.any,
};
