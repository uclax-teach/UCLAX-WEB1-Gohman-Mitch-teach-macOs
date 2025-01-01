// component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/Inset";
import Form from "./Form";

// component
const Contact = () => {
    return (
        <main>
            <Inset>
                <Meta pageTitle="Contact" />
                <h1>Contact</h1>
                <Form />
            </Inset>
        </main>
    );
};

export default Contact;
