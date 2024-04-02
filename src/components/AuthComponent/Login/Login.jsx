import styles from './Login.module.scss';
import { UIForm, UIInput, UIButton } from '@components/UI';
import { useDispatch, useSelector } from "react-redux";
import {clearForm, loginAction, setLoginEmail, setLoginPassword} from "../../../store/reducers/loginReducer";
import { useCallback, useEffect, memo } from "react";
import {registerAction} from "../../../store/reducers/registerReducer";

const Login = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.loginReducer.email);
    const password = useSelector(state => state.loginReducer.password);

    const onChangeEmail = useCallback((value) => {
        dispatch(setLoginEmail(value));
    }, []);

    const onChangePassword = useCallback((value) => {
        dispatch(setLoginPassword(value));
    }, []);

    const onSubmit = useCallback(() => {
        dispatch(loginAction());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(clearForm());
        }
    }, []);

     return (
          <UIForm classes="auth_form">
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
                    <UIInput
                        inputStyle="large"
                        type="password"
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
                    />
               </div>
          </UIForm>
     );
};

export default memo(Login);