import { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import Content from './Content/Content';
import styles from './UItabs.module.scss';
import cn from "classnames";

const UITabs = ({ data, className = undefined }) => {
     const [activeItem, setActiveItem] = useState(data[0]);

     return (
          <div className={cn(styles.wrap, className)}>
               <Navigation
                    data={data} 
                    activeItem={activeItem} 
                    setActiveItem={setActiveItem}
               />
               <Content>
                    {activeItem.content}
               </Content>
          </div>
     );
};

UITabs.propTypes = {
     data: PropTypes.array
};


export default UITabs;