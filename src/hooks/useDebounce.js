import { useMemo } from 'react';
import { debounce } from 'lodash';

const useDebounce = (cb, delay) => {
     return useMemo(() => debounce(cb, delay), [cb, delay]);
};

export default useDebounce;