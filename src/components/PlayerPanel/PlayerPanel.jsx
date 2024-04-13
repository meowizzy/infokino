import { useState, useRef, useEffect } from "react";
import getVideoUrl from "@helpers/getVideoUrl";
import { UILoader, UITitle, UIPlayerButton} from "@components/UI";
import { WithAuth } from "@hoc/WithAuth";
import cn from 'classnames';
import styles from './PlayerPanel.module.scss';


export const PlayerPanel = ({ poster, background, title, enName, id }) => {
     const [showVideo, setShowVideo] = useState(false); 
     const [iframeIsLoaded, setIframeIsLoaded] = useState(false);
     const iframe = useRef();
     const backgroundUrl = background ? background.replace('orig', '1280x720') : poster?.url || poster?.previewUrl;

     useEffect(() => {
          const video = iframe.current;
          if (video) {
               const handleIframeLoading = () => {
                    setIframeIsLoaded(true);
               };

               video.addEventListener('load', handleIframeLoading);
               
               return () => {
                    video.removeEventListener('load', handleIframeLoading);
               };
          }
     }, [showVideo]);

     return (
          <div className={styles.wrapper}>
               <div className={styles.background} style={{backgroundImage: `url('${backgroundUrl}')`}}></div>
               <div className="container">
                    <div className={styles.ratio}>
                         <div className={styles.slot}>
                              {
                                   !showVideo && <div className={styles.info}>
                                        <WithAuth
                                             info={<UITitle type="title-s" title="Пожалуйста, авторизуйтесь для просмотра."/>}
                                        >
                                             <UIPlayerButton 
                                                  customClass="playerButton" 
                                                  size="medium" 
                                                  onClick={() => setShowVideo(!showVideo)}
                                             />
                                        </WithAuth>
                                        <h1>
                                             <UITitle title={title}/>
                                        </h1>
                                        { enName && <p>{enName}</p> }
                                   </div>
                              }
                              {
                                   showVideo && (
                                        <>
                                             <div className={cn(styles.player, {
                                                  [styles.hidden]: !iframeIsLoaded
                                             })}>
                                                  <iframe ref={iframe} allowFullScreen title={title} src={getVideoUrl(id)} frameBorder="0"></iframe>
                                             </div>
                                             { !iframeIsLoaded && <UILoader customClass="playerLoader"/> }
                                        </>
                                   ) 
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};