import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { UIButton } from "@components/UI";


const CategoriesItem = ({ path, text, icon }) => {
     return (
          <li>
               <NavLink to={path}>
                    <UIButton text={text} type="primary" Icon={icon}/>
               </NavLink>
          </li>
     );
};

export default CategoriesItem;


CategoriesItem.propTypes = {
     text: PropTypes.string,
     icon: PropTypes.any,
     path: PropTypes.string
};