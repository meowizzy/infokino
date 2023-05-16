import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './UITitle.module.scss';

const UITitle = ({ title, ...props }) => {
     return (
          <p className={styles.title} {...props}>{title}</p>
     );
};

export default memo(UITitle);

UITitle.propTypes = {
     title: PropTypes.string
};

