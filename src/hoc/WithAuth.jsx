import { useSelector } from "react-redux";

export const WithAuth = (props) => {
    const {
        children,
        info = null
    } = props;
    const authData = useSelector(state => state.userReducer.authData);

    if (!authData) {
        return <>{info}</>;
    }

    return <>{children}</>;
};