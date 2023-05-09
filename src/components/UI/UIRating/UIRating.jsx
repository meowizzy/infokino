import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UIRating.module.scss';

const UIRating = ({ type = "small", text, ...props }) => {

     // type = small, medium, large

     return (
          <div className={cn(styles[type], styles.default, 'global-rating')} {...props}>
               {text}
          </div>
     );
}


UIRating.propTypes = {
     type: PropTypes.string,
     text: PropTypes.string
};


export default UIRating;