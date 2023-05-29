import { VIDEOS_API, VIDEOS_POSTER } from "@api/constants";

const getVideoUrl = id => {
     return `${VIDEOS_API}${id}${VIDEOS_POSTER}`;
};

export default getVideoUrl;