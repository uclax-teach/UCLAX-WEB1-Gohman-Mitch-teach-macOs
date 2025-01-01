// components
import Meta from "@Core/components/Meta";
import Inset from "@Layout/Inset";
import Form from "./Form";

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
