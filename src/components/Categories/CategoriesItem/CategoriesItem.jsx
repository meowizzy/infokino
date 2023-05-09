import PropTypes from 'prop-types';

import { UIButton } from "@components/UI";


const CategoriesItem = ({ text, icon }) => {
     return (
          <li>
               <UIButton text={text} type="primary" Icon={icon}/>
          </li>
     );
};

export default CategoriesItem;


CategoriesItem.propTypes = {
     text: PropTypes.string,
     icon: PropTypes.any
};