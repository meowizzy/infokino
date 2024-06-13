import { forwardRef, memo, useState } from "react";
import PropTypes from 'prop-types';
import { ReactComponent as EyeIcon } from "@public/images/eye.svg";
import { ReactComponent as EyeVisibleIcon } from "@public/images/eyeVisible.svg";
import cn from 'classnames';
import styles from './UIInput.module.scss';
import {paste} from "@testing-library/user-event/dist/paste";



const UIInput = memo(forwardRef(({ value, type = "text", onChange, name, classes, placeholder, inputStyle = 'base', ...props }, ref) => {
     return (
         <input
             className={cn(styles[inputStyle], styles.input, classes)}
             type={type}
             onChange={e => onChange && onChange(e.target.value)}
             value={value}
             placeholder={placeholder}
             name={name}
             {...props}
         />
     );
}));

const Password = forwardRef(({ classes, ...props }, ref) => {
     const [type, setType] = useState("password");

     const onChangeTypeClick = () => {
          setType((prev) => prev === "password" ? "text" : "password");
     };

     return (
         <div className={cn(styles.password, classes)}>
              <UIInput
                  type={type}
                  ref={ref}
                  {...props}
              />
              <span className={styles.suffix} onClick={onChangeTypeClick}>
                   {type === "password" ? (
                       <EyeIcon className={styles.eye}/>
                   ) : (
                       <EyeVisibleIcon className={cn(styles.eye, styles.eyeVisible)}/>
                   )}
              </span>
         </div>
     );
});
export default Object.assign(UIInput, { Password });

UIInput.propTypes = {
     type: PropTypes.string,
     onChange: PropTypes.func,
     name: PropTypes.string,
     placeholder: PropTypes.string
};
