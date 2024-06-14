import PropTypes from "prop-types";
import { memo, useEffect, useCallback, useState } from "react";
import { useParams } from "react-router";
import { useClickOutside } from "@hooks/useClickOutside";
import { ReactComponent as ArrowIcon } from '@public/images/arrow.svg';
import cn from "classnames";
import styles from "./UISelect.module.scss";


const UISelect = memo(({ options, onChange }) => {
          const [isOpened, setIsOpened] = useState(false);
          const selectRef = useClickOutside(setIsOpened);
          const [selectedOption, setSelectedOption] = useState(options[0]);
          const params = useParams();

          useEffect(() => {
               setSelectedOption(options[0]);
          }, [params.type]);

          const handleOpenClick = useCallback(() => {
               setIsOpened(!isOpened);
          }, [isOpened, setIsOpened]);

          const handleSelect = useCallback((option) => {
               setSelectedOption(option);
               onChange(option);
               setIsOpened(false);
          }, [onChange, setIsOpened]);

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
