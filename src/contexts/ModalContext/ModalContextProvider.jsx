import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ModalContext } from "./ModalContext";
import { Modal } from "@components/Modal";

let globalModalContextValue = {};
export const getGlobalModalContextValue = () => globalModalContextValue;
export const ModalContextProvider = ({ children }) => {
     const [modalOpened, setModalOpened] = useState(false);
     const [modalContent, setModalContent] = useState(null);
     const location = useLocation();

     const openModal = (modalConfig) => {
          setModalContent(modalConfig);
          setModalOpened(true);
     };

     const closeModal = () => {
          setModalContent(null);
          setModalOpened(false);
     };

     useEffect(() => {
          globalModalContextValue.closeModal = closeModal;
          globalModalContextValue.openModal = openModal;
     }, []);

     const valueModalProvider = {
          openModal,
          closeModal
     };

     useEffect(() => {
          closeModal();
     }, [location]);

     return (
          <ModalContext.Provider value={valueModalProvider}>
               {children}
               <Modal 
                    isOpened={modalOpened} 
                    title={modalContent?.title} 
                    children={modalContent?.content}
               />
          </ModalContext.Provider>
     );
};