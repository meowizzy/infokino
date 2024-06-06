import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { routesPath } from "@app/config/routes";
import { useEffect } from "react";

export const ProtectedRoute = (props) => {
    const {
        children,
        isPrivate
    } = props;
    const { authData, _inited } = useSelector(state => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authData && isPrivate && _inited) {
            navigate(routesPath.HOME);
        }
    }, [authData, _inited, navigate, isPrivate]);

    return (
        <>
            { children }
        </>
    );
};