import styles from './Register.module.scss';
import { UIForm, UIInput, UIButton } from '@components/UI';

const Register = () => {
     return (
          <UIForm classes="auth_form">
               <div className="form_field">
                    <UIInput inputStyle="large" type="text" name="email" placeholder="Email"/>
               </div>
               <div className="form_field">
                    <UIInput inputStyle="large" type="password" name="password" placeholder="Пароль"/>
               </div>
               <div className="form_submit">
                    <UIButton text={"Зарегистрироваться"} type="accent"/>
               </div>
          </UIForm>
     );
};

export default Register;