import { Link } from "react-router-dom";
import brandLogo from "../../../assets/img/logo.png";
const Logo = () => {
  return (
    <Link to="/">
      <div className="w-full h-12">
        <img
          src={brandLogo}
          className="w-full h-full object-contain"
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
