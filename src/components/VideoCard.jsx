import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const VideoCard = ({ item }) => {
  const { t } = useTranslation();
  const [videoUrl, setVideoUrl] = useState(item.url);

  const handleVideoClick = () => {
    if (!videoUrl.includes("autoplay=1")) {
      const autoplayUrl = videoUrl.includes("?")
        ? `${videoUrl}&autoplay=1`
        : `${videoUrl}?autoplay=1`;
      setVideoUrl(autoplayUrl); // Заменяем URL видео, чтобы активировать автозапуск
    }
  };

  return (
    <div className="video-item gallery__item" onClick={handleVideoClick}>
      <div className="video-description">
        <h2 className="text-block__h">{t(`headers.video.${item.id}`)}</h2>
        <p className="text-block__p">{t(`paragraphs.video.${item.id}`)}</p>
      </div>
      <iframe
        src={videoUrl}
        className="video"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoCard;
