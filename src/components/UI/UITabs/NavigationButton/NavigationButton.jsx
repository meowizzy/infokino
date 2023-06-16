import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './NavigationButton.module.scss';

const NavigationButton = ({ label, className = "", active, onClick }) => {
     return (
          <li className={cn(styles.button, {
               [styles.active]: active,
               [`${className}__tab-item ${active ? `${className}__tab-item--active` : ""}`]: className.length 
          })}>
               <button onClick={onClick}>{label}</button>
          </li>
     );
};

NavigationButton.propTypes = {
     label: PropTypes.string,
     className: PropTypes.string,
     active: PropTypes.bool,
     onClick: PropTypes.func
};

export default NavigationButton;