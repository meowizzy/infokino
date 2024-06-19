import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { recommendsQueryTrigger } from "@store/reducers/recommends/recommendsReducer";
import getVideoUrl from "@helpers/getVideoUrl";
import { UILoader, UITitle, UIPlayerButton} from "@components/UI";
import { WithAuth } from "@hoc/WithAuth";
import cn from 'classnames';
import styles from './PlayerPanel.module.scss';

export const PlayerPanel = ({ data, id }) => {
     const [showVideo, setShowVideo] = useState(false);
     const [iframeIsLoaded, setIframeIsLoaded] = useState(false);
     const iframe = useRef();
     const backgroundUrl = data?.background ? data?.background.replace('orig', '1280x720') : data?.poster?.url || data?.poster?.previewUrl;
     const dispatch = useDispatch();

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

     const onPlayerButtonClick = () => {
          setShowVideo(true);
          if (data?.genres) {
               dispatch(recommendsQueryTrigger([data?.genres[0]?.name]));
          }
     };

     return (
          <div className={styles.wrapper}>
               <div className={styles.background} style={{backgroundImage: `url('${backgroundUrl}')`}}></div>
               <div className="container">
                    <div className={styles.ratio}>
                         <div className={styles.slot}>
                              {!showVideo && (
                                  <div className={styles.info}>
                                       <WithAuth
                                           info={<UITitle type="title-s"
                                                          title="Пожалуйста, авторизуйтесь для просмотра."/>}
                                       >
                                            <UIPlayerButton
                                                customClass="playerButton"
                                                size="medium"
                                                onClick={onPlayerButtonClick}
                                            />
                                       </WithAuth>
                                       <h1>
                                            <UITitle title={data?.name}/>
                                       </h1>
                                       <p>{data?.enName || data?.alternativeName}</p>
                                  </div>
                              )}
                              {showVideo && (
                                 <>
                                      <div className={cn(styles.player, {
                                           [styles.hidden]: !iframeIsLoaded
                                      })}>
                                           <iframe ref={iframe} allowFullScreen title={data?.name} src={getVideoUrl(id)}
                                                   frameBorder="0"></iframe>
                                      </div>
                                      {!iframeIsLoaded && <UILoader customClass="playerLoader"/>}
                                 </>
                             )}
                         </div>
                    </div>
               </div>
          </div>
     );
};