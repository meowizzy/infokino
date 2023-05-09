import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export const Header = ({ LeftSide, RightSide, ...props }) => {
     const leftSide = LeftSide ? (
          <div className={styles.header__left}>
               {LeftSide}
          </div>
     ) : '';

     const rightSide = RightSide ? (
          <div className={styles.header__right}>
               {RightSide}
          </div>
     ) : '';

     return (
          <header className={styles.header} {...props}>
               <div className={cn(styles.header__in, 'container')}> 
                    {leftSide}
                    {rightSide}
               </div>
          </header>
     );
};

Header.propTypes = {
     LeftSide: PropTypes.element,
     RightSide: PropTypes.element
};