import { useMemo } from 'react';
import { debounce } from 'lodash';

export const useDebounce = (cb, delay) => {
     return useMemo(() => debounce(cb, delay), [cb, delay]);
};