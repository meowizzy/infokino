import getObjectFromQueryString from '@helpers/getObjectFromQuerySearchParams';
import { useSearchParams } from 'react-router-dom';
import { omit } from 'lodash';

const useFilter = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const filter = getObjectFromQueryString(searchParams);

     const setSearchQuery = query => setSearchParams({...filter, ...query});

     const clearFilter = fieldName => setSearchParams(omit(filter, fieldName));


     return {filter, setSearchQuery, clearFilter};
};

export default useFilter;