import { useCallback, useEffect, memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    registerAction,
    setRegisterEmail,
    setRegisterConfirmPassword,
    setRegisterPassword,
    setRegisterUserName,
    clearForm
} from "@store/reducers/auth/registerReducer";
import { UIInput, UIForm, UIButton } from '@components/UI';
import UIErrorMsg from "@components/UI/UIErrorMsg/UIErrorMsg";

const Register = () => {
    const dispatch = useDispatch();
    const {
        username,
        email,
        password,
        confirmPassword,
        error
    } = useSelector(state => state.registerReducer)
    const isLoading = useSelector(state => state.userReducer.isLoading);

    const onChangeName = useCallback((value) => {
        dispatch(setRegisterUserName(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value) => {
        dispatch(setRegisterEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(setRegisterPassword(value));
    }, [dispatch]);

    const onChangeConfirmPassword = useCallback((value) => {
        dispatch(setRegisterConfirmPassword(value));
    }, [dispatch]);

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
                 <UIInput.Password
                     inputStyle="large"
                     value={password}
                     placeholder="Пароль"
                     onChange={onChangePassword}
                 />
             </div>
             <div className="form_field">
                 <UIInput.Password
                     inputStyle="large"
                     value={confirmPassword}
                     placeholder="Повторите пароль"
                     onChange={onChangeConfirmPassword}
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