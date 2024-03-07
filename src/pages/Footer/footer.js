import "./footer.scss";
import { ReactComponent as MailImg } from "./../../assets/images/mail.svg";

function Footer() {
  return (
    <footer>
      <div className="social">
        <div className="social-body"></div>
        <a
          className="social-mail"
          href="mailto:shohrux-rustamov@mail.ru"
          target="_blank"
          rel="noreferrer"
        >
          <div className="box">
            <p>Contact me</p>
            <MailImg className="mail" />
          </div>
        </a>
      </div>
      <div className="footer">
        <p>&copy; Copyright 2024, MilliyBro.uz All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
