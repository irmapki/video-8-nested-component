import AuthLayout from "../components/Layouts/AuthLayouts";
import FormProfile from "../components/Fragments/FormProfile";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    return (
        <AuthLayout title="Profile">
            <FormProfile />
        </AuthLayout>
    );
};

export default ProfilePage;
