import cn from 'classnames';
import { useContext } from 'react';
import { ModalContext } from '@contexts';
import styles from './Modal.module.scss';
import {ReactComponent as CloseIcon} from '@public/images/close.svg';

export const Modal = ({ isOpened, title, children }) => {
     const { closeModal } = useContext(ModalContext);

     const handleCloseClick = (e) => {
          e.preventDefault();
          closeModal()
     };

     return (
          <div className={cn(styles.backdrop, {
               [styles.isOpened]: isOpened
          })}>
               {
                    title && 
                    <div className={styles.header}>
                         <div className={styles.title}>
                              {title}
                         </div>
                         <button className={styles.close} onClick={handleCloseClick}>
                              <CloseIcon />
                         </button>
                    </div>
               }
               {
                    children 
                    ? <div className={styles.content}>
                         {!title && <button onClick={handleCloseClick} className={styles.close}><CloseIcon /></button>}
                         { children }
                    </div>
                    : ''
               }
          </div>
     );
};