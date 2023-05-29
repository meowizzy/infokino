import { memo, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import useClickOutside from "@hooks/useClickOutside";
import { ReactComponent as ArrowIcon } from '@public/images/arrow.svg';
import styles from "./UISelect.module.scss";

const UISelect = memo(({ options, onChange }) => {
          const [isOpened, setIsOpened] = useState(false);
          const selectRef = useClickOutside(setIsOpened);
          const [selectedOption, setSelectedOption] = useState(options[0]);
          
          const handleOpenClick = () => {
               setIsOpened(!isOpened);
          };

          const handleSelect = (option) => {
               setSelectedOption(option);
               onChange(option);
               setIsOpened(false);
          };

          return (
               <div ref={selectRef} className={styles.wrapper}>
                    <div  className={ cn(styles.header, { [styles.active]: isOpened}) } onClick={handleOpenClick}>
                         <span>{selectedOption.title}</span>
                         <ArrowIcon />
                    </div>

                    { isOpened && (
                         <ul className={styles.dropDown}>
                              {options.map(option => (
                              <li key={option.title} onClick={() => handleSelect(option)} 
                                   className={cn(styles.dropDown__item, {
                                        [styles.active]: option.title === selectedOption.title
                                   })}
                              >
                                   {option.title}
                              </li>
                              ))}
                         </ul>
                         )
                    }
               </div>
          );
     }
);

UISelect.propTypes = {
     setItem: PropTypes.func
};

export default UISelect;
