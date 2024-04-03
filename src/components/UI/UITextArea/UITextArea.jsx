import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UITextArea.module.scss';
import { memo } from "react";

const UITextArea = ({
    className,
    value,
    onChange,
    placeholder,
    inputStyle = "base",
    ...props
}) => {

    const onChangeHandler = (e) => {
        onChange(e.target.value);
    };

     return (
          <textarea 
            className={cn(styles.textarea, className, styles[inputStyle])}
            onChange={onChangeHandler}
            placeholder={placeholder}
            value={value}
            {...props}
        />
     );
};

export default memo(UITextArea);

UITextArea.propTypes = {
     onChange: PropTypes.func,
     placeholder: PropTypes.string,
     value: PropTypes.string,
     inputStyle: PropTypes.string
};
