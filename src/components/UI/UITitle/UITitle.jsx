import PropTypes from 'prop-types';
import styles from './UITitle.module.scss';

const UITitle = ({ title, ...props }) => {
     return (
          <p className={styles.title} {...props}>{title}</p>
     );
};

export default UITitle;

UITitle.propTypes = {
     title: PropTypes.string
};

