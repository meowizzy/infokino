import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useScrollFetching = (props) => {
     const { data, isLoading, page, pages, getAllFilms, setAllFilmsLoadingAction, setAllFilmsPage } = props;
     const dispatch = useDispatch();

     useEffect(() => {
          if (!data.length) dispatch(getAllFilms());
          if (isLoading && page < pages) {
               dispatch(setAllFilmsPage(page + 1));
               dispatch(getAllFilms());
          }
     }, [isLoading, dispatch]);

     const handleScroll = event => {
          if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 10 && page < pages) {
               dispatch(setAllFilmsLoadingAction(true));             
          }
     };

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);    
          };
     }, [page]);
};

export default useScrollFetching;