import { useEffect, useState } from "react"
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator"

const RoutesCustom = ({ children }) => {
     const [progress, setProgress] = useState(false);
     const [prevLoc, setPrevLoc] = useState("");
     const location = useLocation();

     useEffect(() => {
          setPrevLoc(location.pathname)
          setProgress(true)
          if(location.pathname === prevLoc){
               setPrevLoc('')
          }
     }, [location]);

     useEffect(() => {
          setProgress(false)
     }, [prevLoc]);

     TopBarProgress.config({
          barColors: {
               "0": "#406AFF"
          },
          shadowBlur: 5
     });

     return (
          <>
               {progress && <TopBarProgress />}
               <Routes>{children}</Routes>
          </>
     );
};

export default RoutesCustom;