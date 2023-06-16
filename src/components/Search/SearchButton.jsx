import { useContext } from 'react';
import { ModalContext } from '@contexts';
import { UIButton } from "@components/UI";
import { ReactComponent as SearchIcon } from "@public/images/search-icon.svg";
import SearchContent from './SearchContent.jsx';

const SearchButton = () => {
     const { openModal } = useContext(ModalContext);

     const handleClick = e => {
          e.preventDefault();
          openModal({
               content: <SearchContent />
          });
     };

     return (
          <UIButton 
               Icon={SearchIcon}
               text="Искать"
               type="default"
               onClick={handleClick}
          />
     )
};

export default SearchButton;