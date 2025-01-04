import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="text-block__h contact-header tracking-in-expand ">
        Let's keep in touch
      </h1>
      <div className="contacts-block fade-in">
        <div className="contact">
          <div className="contact-items ">
            <div className="contact-item">
              <CgPhone size="20" />
              <a className="text-block__p" href="tel:+972-547-355910">
                +972-547355910
              </a>
            </div>
            <div className="contact-item">
              <MdEmail size="20" />
              <p className="text-block__p">Nightshiftmaster@gmail.com</p>
            </div>
            <div className="contact-item">
              <img
                style={{ height: "35px", width: "35px", marginLeft: "-8px" }}
                src="./socials/whatsup.png"
                alt=""
                srcset=""
              />

              <a className="text-block__p" href="https://wa.me/972547355910">
                send message
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{
              width: "50vw",
              objectFit: "contain",
            }}
            src="https://st3.depositphotos.com/1356916/15871/i/450/depositphotos_158714652-stock-photo-violin-close-up-hands-classical.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
