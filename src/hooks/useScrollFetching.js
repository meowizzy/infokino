import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilms, setAllFilmsLoadingAction, setAllFilmsPage } from "@store/actions/actionCreator";

const useScrollFetching = (props) => {
     const { data, isLoading, error } = props;
     const page = useSelector(state => state.allFilmsReducer.page);
     const pages = useSelector(state => state.allFilmsReducer.pages);
     const dispatch = useDispatch();

     useEffect(() => {
          if (!data.length && !error) dispatch(getAllFilms());
     }, [data, dispatch]);

     useEffect(() => {
          if (isLoading && page < pages) {
               dispatch(setAllFilmsPage(page + 1));
               dispatch(getAllFilms());
          }
     }, [isLoading]);

     useEffect(() => {
          const handleScroll = event => {
               if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 10 && page < pages) {
                    dispatch(setAllFilmsLoadingAction(true));             
               }
          };

          if (!error) document.addEventListener('scroll', handleScroll);
          return () => document.removeEventListener('scroll', handleScroll);    
     }, [page, isLoading, error]);
};

export default useScrollFetching;