const VideoCard = ({ item }) => {
  return (
    <div>
      <div className="gallery__item text-block">
        <h2 className="text-block__h">{item.name}</h2>
        <p className="text-block__p">{item.description}</p>
      </div>
      <iframe
        src={item.url}
        className="gallery__item"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
export default VideoCard;
