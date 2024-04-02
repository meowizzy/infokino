import cn from 'classnames';
import styles from './UIForm.module.scss';

const UIForm = ({ classes, children, ...props }) => {
     return (
          <div className={cn(styles.form, classes)}>
               {children}
          </div>
     );   
};

export default UIForm;