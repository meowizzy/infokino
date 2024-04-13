import { useSelector } from "react-redux";
import { roles } from "@api/roles";

export const WithPermission = (props) => {
    const {
        children
    } = props;
    const authData = useSelector(state => state.userReducer.authData);

    if (authData?.role === roles.ADMIN) {
        return <>{children}</>;
    }

    return "";
};