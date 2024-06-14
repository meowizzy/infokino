import { omit } from 'lodash';
import getObjectFromQueryString from '@helpers/getObjectFromQuerySearchParams';
import { useSearchParams } from 'react-router-dom';


export const useFilter = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const filter = getObjectFromQueryString(searchParams);

     const setSearchQuery = query => setSearchParams({...filter, ...query});

     const clearFilter = fieldName => setSearchParams(omit(filter, fieldName));


     return {filter, setSearchQuery, clearFilter};
};