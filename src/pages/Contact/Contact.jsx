import styles from "./Contact.module.css";
import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.contact_container}>
        <h1
          className={`text-block__h ${styles.contact_header} tracking-in-expand`}
        >
          {t("headers.contact_header")}
        </h1>
        <div className={`${styles.contacts_block} fade-in`}>
          <div className={styles.contact}>
            <div className={styles.contact_items}>
              <div className={styles.contact_item}>
                <CgPhone size="20" />
                <a
                  className="text-block__p"
                  href="tel:+972-547-355910"
                  target="_blank"
                >
                  +972-547355910
                </a>
              </div>
              <div className={styles.contact_item}>
                <MdEmail size="20" />
                <a
                  target="_blank"
                  className="text-block__p"
                  href="mailto:Nightshiftmaster@gmail.com"
                  title="Click to send an email"
                >
                  Nightshiftmaster@gmail.com
                </a>
              </div>
              <div className={styles.contact_item}>
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    marginLeft: "-7px",
                  }}
                  src="./socials/whatsup.png"
                  alt=""
                />

                <a
                  className="text-block__p"
                  href="https://wa.me/972547355910"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("paragraphs.contact_message_paragraph")}
                </a>
              </div>
            </div>
          </div>

          <img
            style={{
              width: "40vw",
              objectFit: "contain",
            }}
            src="./images/violin.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
