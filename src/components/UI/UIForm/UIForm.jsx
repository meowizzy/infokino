import cn from 'classnames';
import styles from './UIForm.module.scss';

const UIForm = ({ classes, children, ...props }) => {
     return (
          <form className={cn(styles.form, classes)} {...props}>
               {children}
          </form>
     );   
};

export default UIForm;