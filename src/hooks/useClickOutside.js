import { useRef, useEffect } from "react";

const useClickOutside = (handler) => {
     const ref = useRef();

     useEffect(() => {
          if (!ref) return;
          const handleClick = e => {
               if (!ref.current) return;
               if (!ref.current.contains(e.target)) {
                    handler(false);
               }
          };

          document.addEventListener('mouseup', handleClick);
          return () => document.removeEventListener('mouseup', handleClick);
     }, [handler]);

     return ref;
};

export default useClickOutside;