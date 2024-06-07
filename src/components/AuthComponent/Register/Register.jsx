import { useCallback, useEffect, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    registerAction,
    setRegisterEmail,
    setRegisterPassword,
    setRegisterUserName,
    clearForm
} from "@store/reducers/auth/registerReducer";
import UIErrorMsg from "../../UI/UIErrorMsg/UIErrorMsg";
import { UIForm, UIInput, UIButton } from '@components/UI';
import styles from './Register.module.scss';

const Register = () => {
    const dispatch = useDispatch();
    const {
        username,
        email,
        password,
        error
    } = useSelector(state => state.registerReducer)
    const isLoading = useSelector(state => state.userReducer.isLoading);

    const onChangeName = useCallback((value) => {
        dispatch(setRegisterUserName(value));
    }, [username]);

    const onChangeEmail = useCallback((value) => {
        dispatch(setRegisterEmail(value));
    }, [email]);

    const onChangePassword = useCallback((value) => {
        dispatch(setRegisterPassword(value));
    }, [password]);

    const onSubmit = useCallback(() => {
        dispatch(registerAction());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(clearForm());
        }
    }, []);

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
                     type="text"
                     placeholder="Имя"
                     value={username}
                     onChange={onChangeName}
                 />
             </div>
             <div className="form_field">
                 <UIInput
                     inputStyle="large"
                     type="email"
                     value={email}
                     placeholder="Email"
                     onChange={onChangeEmail}
                 />
             </div>
             <div className="form_field">
                 <UIInput
                     inputStyle="large"
                     type="password"
                     value={password}
                     placeholder="Пароль"
                     onChange={onChangePassword}
                 />
             </div>
             <div className="form_submit">
                 <UIButton
                     text={"Зарегистрироваться"}
                     type="accent"
                     onClick={onSubmit}
                     isLoading={isLoading}
                 />
             </div>
         </UIForm>
     );
};

export default memo(Register);