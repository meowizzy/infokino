import { MEDIA_URL, MEDIA_POSTER } from "@app/constants";

const getVideoUrl = id => {
     return `${MEDIA_URL}${id}${MEDIA_POSTER}`;
};

export default getVideoUrl;