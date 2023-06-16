import PropTypes from 'prop-types';
import cn from "classnames";
import NavigationButton from '../NavigationButton/NavigationButton';
import styles from './Navigation.module.scss';

const Navigation = ({ data, className = '', activeItem, setActiveItem }) => {

     return (
          data.length ? 
               <ul className={cn(styles.list, {
                    [`${className}__tab-list`]: className.length
               })}>
                    {
                         data.map(item => (
                              <NavigationButton 
                                   key={item.id}
                                   label={item.label} 
                                   className={className} 
                                   active={item.id === activeItem.id}
                                   onClick={() => setActiveItem(item)}     
                              />
                         ))
                    }
               </ul>
          : ''
     );
};

Navigation.propTypes = {
     data: PropTypes.array,
     className: PropTypes.string,
     activeItem: PropTypes.object
};

export default Navigation;