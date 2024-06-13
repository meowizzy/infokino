import { useSelector } from "react-redux";

export const useRoles = () => {
    const { authData } = useSelector(state => state.userReducer)

    return authData.role;
};