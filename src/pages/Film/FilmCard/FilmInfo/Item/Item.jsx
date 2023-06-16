import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Item = ({ label, value, link = "" }) => {
     const val = (
          Array.isArray(value) 
          ? value.map(item => {
               if (link.length) return <Link key={item.id || item.name} to={item.id ? link + item.id : link + item.name}>{item.name}</Link>

               return item.name;
          })
          : link.length ? <Link to={link}>{value}</Link> : value
     );

     return (
          val && <li>
               <span className="label">{label}</span>
               <span className="value">{val}</span>
          </li>
     );
};

export default Item;

Item.propTypes = {
     label: PropTypes.string,
     value: PropTypes.any,
     link: PropTypes.string
};