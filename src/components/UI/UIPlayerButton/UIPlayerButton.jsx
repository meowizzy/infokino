import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as Icon } from '@public/images/player.svg';
import styles from './UIPlayerButton.module.scss';

const UIPlayerButton = ({ customClass = '', size = "medium", ...props }) => {
     return (
          <button className={cn(customClass, styles.element, styles[size])} {...props}>
               <Icon />
          </button> 
     );
};

UIPlayerButton.propTypes = {
     customClass: PropTypes.string,
     size: PropTypes.string
};


export default UIPlayerButton;