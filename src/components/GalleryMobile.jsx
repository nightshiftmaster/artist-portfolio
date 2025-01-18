const GalleryMobile = () => {
  return (
    <div className="foto-gallery-mobile">
      <div className="description-mobile">
        <div className="logo tracking-in-expand">
          {t(`headers.gallery_header`)}
        </div>
        <p className="text-block__p fade-in">
          {t(`paragraphs.gallery_paragraph`)}
        </p>
      </div>
      <div className={`active-foto tilt-in-bottom-2 ${isOpen ? "opened" : ""}`}>
        <swiper-container
          style={{ width: "100%", height: "60vh" }}
          slides-per-view="1"
          navigation
          loop
          injectStyles={[
            `
            .swiper-button-next,
            .swiper-button-prev {
              color: white;
        }`,
          ]}
        >
          {items.map((item) => {
            return (
              <swiper-slide key={index} style={{ color: "white" }}>
                <div
                  onClick={() => setOpen(false)}
                  style={{
                    position: "absolute",

                    top: "0",
                    right: "15vw",
                  }}
                >
                  <IoIosClose size="35" />
                </div>
                <img
                  onClick={() => setOpen(false)}
                  src={item}
                  alt=""
                  srcset=""
                  style={{
                    borderRadius: "20px",
                    height: "100%",
                    width: "100%",
                    color: "white",
                    objectFit: "contain",
                  }}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
        {/* </div> */}
      </div>
      <div className="custom-pagination">
        {items.map((_, i) => {
          return (
            <button
              key={i}
              className={`pagination-bullet ${index === i ? "active" : ""}`}
            ></button>
          );
        })}
      </div>
      <SwiperSlider
        index={index}
        setIndex={setIndex}
        mainClass="slider_mobile"
        items={items}
        setActiveUrl={setActiveUrl}
        setOpen={setOpen}
        isOpen={isOpen}
      />
      <SwiperSlider mainClass="slider_bg" items={items} />
    </div>
  );
};

export default GalleryMobile;
