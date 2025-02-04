import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about_container">
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
        }}
      >
        <h1 className="text-block__h tracking-in-expand ">
          {t("headers.about_header")}
        </h1>
        <p className="text-block__p fade-in">
          {t("paragraphs.about_paragraph")}
        </p>
      </div>
    </div>
  );
};

export default About;
