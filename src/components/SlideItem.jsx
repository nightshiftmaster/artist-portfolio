const SlideItem = ({
  item,
  opened,
  setOpened,
  setActiveUrl,
  i,
  setActiveIndex,
  activeIndex,
}) => {
  return (
    <div
      className={`swiper-slide slider__item ${
        activeIndex === i ? "opened" : ""
      }`}
      onClick={() => {
        setOpened(!opened);
        setActiveUrl(item);
        setActiveIndex((prev) => {
          if (prev === i) {
            prev = null;
            return prev;
          } else {
            prev = i;
            return prev;
          }
        });
      }}
    >
      <div
        className="slider__img"
        data-swiper-parallax={i % 2 === 0 ? "20%" : "30%"}
        style={{
          backgroundImage: `url(${item})`,
        }}
      ></div>
    </div>
  );
};

export default SlideItem;
