import PropTypes from 'prop-types';
import styles from './SearchInput.module.scss';
import cn from 'classnames';

export const SearchInput = ({ value, onChange, ...props }) => {
     return (
          <div className={cn(styles.search_input)}>
               <input type="text" value={value} onChange={onChange} {...props}/>
               <span className={cn(styles.search_input_caption, {
                    [styles.active]: value?.length
               })}>Фильмы, актеры, режиссёры... </span>
          </div>
     );
};


SearchInput.propTypes = {
     value: PropTypes.string,
     onChange: PropTypes.func
};