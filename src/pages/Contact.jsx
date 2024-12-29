import { CgPhone } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="logo">Let's keep in touch</h1>
      <div className="contact-item">
        <CgPhone size="20" />
        <a href="tel:+972-547-355910">+972-547355910</a>
      </div>
      <div className="contact-item">
        <MdEmail size="20" />
        <p>Nightshiftmaster@gmail.com</p>
      </div>
      <div className="contact-item">
        <img
          style={{ height: "35px", width: "35px", marginLeft: "-8px" }}
          src="./socials/whatsup.png"
          alt=""
          srcset=""
        />

        <a href="https://wa.me/972547355910">send message</a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Contact;
