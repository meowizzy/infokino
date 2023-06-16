import PropTypes, { string } from 'prop-types';
import cn from "classnames";
import styles from './Content.module.scss';

const Content = ({ children, className = "" }) => {
     return (
          <div className={cn(styles.content, {
               [`${className}__tab-list`]: className.length
          })}>
               {children}
          </div>
     );
};

Content.propTypes = {
     children: PropTypes.object || PropTypes.node || PropTypes.func,
     className: string
};

export default Content;