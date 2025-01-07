import { useTranslation } from "react-i18next";

const VideoCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="video-item gallery__item">
      <div className="video-description">
        <h2 className="text-block__h">{t(`headers.video.${item.id}`)}</h2>
        <p className="text-block__p">{t(`paragraphs.video.${item.id}`)}</p>
      </div>
      <div className="video">
        <iframe
          src={item.url}
          className="video-file"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          script-src="none"
        ></iframe>
      </div>
    </div>
  );
};
export default VideoCard;
