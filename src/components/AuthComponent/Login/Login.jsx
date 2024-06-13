import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, memo, useMemo } from "react";
import { clearForm, loginAction, setLoginEmail, setLoginPassword } from "@store/reducers/auth/loginReducer";
import { UIForm, UIInput, UIButton } from '@components/UI';
import UIErrorMsg from "@components/UI/UIErrorMsg/UIErrorMsg";


const Login = ({ closeModal }) => {
    const dispatch = useDispatch();
    const {
        email,
        password,
        error
    } = useSelector(state => state.loginReducer);
    const isLoading = useSelector(state => state.userReducer.isLoading);

    const onChangeEmail = useCallback((value) => {
        dispatch(setLoginEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(setLoginPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(loginAction());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(clearForm());
        }
    }, [dispatch]);

    const validateErrors = useMemo(() => {
        return Array.isArray(error) ? (
            error?.map(item => (
                <UIErrorMsg
                    key={item}
                    value={item}
                />
            ))
        ) : <UIErrorMsg value={error}/>;
    }, [error]);

     return (
          <UIForm classes="auth_form">
              {error ? validateErrors : ""}
               <div className="form_field">
                    <UIInput
                        inputStyle="large"
                        type="email"
                        placeholder="Email"
                        onChange={onChangeEmail}
                        value={email}
                    />
               </div>
               <div className="form_field">
                    <UIInput.Password
                        inputStyle="large"
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Пароль"
                    />
               </div>
               <div className="form_submit">
                    <UIButton
                        onClick={onSubmit}
                        text={"Войти"}
                        type="accent"
                        isLoading={isLoading}
                    />
               </div>
          </UIForm>
     );
};

export default memo(Login);