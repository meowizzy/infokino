import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UIInput.module.scss';
import { memo } from "react";


const UIInput = ({ value, type = "text", onChange, name, classes, placeholder, inputStyle = 'base', ...props }) => {
     return (
          <input 
               className={cn(styles[inputStyle], classes)} 
               type={type} 
               onChange={e => onChange && onChange(e.target.value)}
               value={value} 
               placeholder={placeholder} 
               name={name} 
               {...props}
          />
     );
};

export default memo(UIInput);

UIInput.propTypes = {
     value: PropTypes.string,
     type: PropTypes.string,
     onChange: PropTypes.func,
     name: PropTypes.string,
     placeholder: PropTypes.string
};
