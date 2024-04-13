import PropTypes from 'prop-types';
import { memo } from 'react';
import cn from 'classnames';
import styles from './UITitle.module.scss';

const UITitle = ({ title, classes = '', type = "title-xl", ...props }) => {
     return (
          <p className={cn(styles.title, classes, styles[type])} {...props}>{title}</p>
     );
};

export default memo(UITitle);

UITitle.propTypes = {
     title: PropTypes.string,
     classes: PropTypes.string
};

