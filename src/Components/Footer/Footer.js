import "./Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <ul className="ul-footer">
        <li className="li-footer">ABOUT MARVEL</li>
        <li className="li-footer">HELP/FAQS</li>
        <li className="li-footer">CAREERS</li>
        <li className="li-footer">INTERNSHIPS</li>
      </ul>
      <img
        src={`${process.env.PUBLIC_URL}/marvel+beezy-logo.png`}
        alt="marvel-beezy-logo"
      />
    </div>
  );
};

export default Footer;
