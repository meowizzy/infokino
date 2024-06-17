import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { routesPath } from "@app/config/routes";

export const WithRoles = (props) => {
    const {
        roles,
        children
    } = props;
    const { authData, _inited } = useSelector(state => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (roles && _inited && !roles.includes(authData?.role)) {
            navigate(routesPath.HOME);
        }
    }, [authData, _inited, navigate]);

    return (
        <>
            {children}
        </>
    );
};