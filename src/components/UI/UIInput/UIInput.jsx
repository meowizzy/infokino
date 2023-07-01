import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UIInput.module.scss';


const UIInput = ({ value, type = "text", onChange, name, classes, placeholder, inputStyle = 'base', ...props }) => {
     return (
          <input 
               className={cn(styles[inputStyle], classes)} 
               type={type} 
               onChange={onChange} 
               value={value} 
               placeholder={placeholder} 
               name={name} 
               {...props}
          />
     );
};

export default UIInput;

UIInput.propTypes = {
     value: PropTypes.number,
     type: PropTypes.string,
     onChange: PropTypes.func,
     name: PropTypes.string,
     placeholder: PropTypes.string
};
