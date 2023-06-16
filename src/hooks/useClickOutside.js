import { useRef, useEffect } from "react";

const useClickOutside = (handler) => {
     const filterRef = useRef();

     useEffect(() => {
          if (!filterRef) return;
          const handleClick = e => {
               if (!filterRef.current) return;
               if (!filterRef.current.contains(e.target)) {
                    handler(false);
               }
          };

          document.addEventListener('mouseup', handleClick);
          return () => document.removeEventListener('mouseup', handleClick);
     }, [handler]);

     return filterRef;
};

export default useClickOutside;