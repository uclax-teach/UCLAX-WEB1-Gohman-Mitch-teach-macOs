// components
import UniversalForm from "@App/Core/components/Form/UniversalForm";

// component
const PseudoLogin = () => {
    const formInputs = [
        {
            id: "userEmail",
            type: "text",
            labelText: "Email",
            value: "",
            rules: ["required", "email"],
        },
        {
            id: "password",
            type: "password",
            labelText: "Password",
            value: "",
            rules: ["required"],
        },
    ];

    return (
        <UniversalForm
            formInputs={formInputs}
            apiEndpoint="/pseudoLogin"
            trackingId="pseudoLogin"
            submitText="Login"
        />
    );
};

export default PseudoLogin;
