import { useSelector } from "react-redux";

export const useAuth = () => {
     const { email, token, id } = useSelector(state => state.authReducer);

     return {
          isAuthorized: !!email,
          email,
          token,
          id
     }
};