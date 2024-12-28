// component
import Meta from "@App/Core/components/Meta";
import Inset from "@App/Layout/Inset";
import StaffList from "./StaffList";

// component
const Staff = () => {
    return (
        <main>
            <Inset>
                <Meta pageTitle="Staff" />
                <h1>Staff</h1>
                <StaffList />
            </Inset>
        </main>
    );
};

export default Staff;
