import "./Topbar.scss";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@material-ui/icons/Menu";
export const Topbar = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1100 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <header className="topbarContainer">
      <div className="headerLogo">
        <span>Only Real</span>
      </div>
      <Desktop>
        <div className="topbarList">
          <ul>
            <li>Escorts</li>
            <li>City Tours</li>
            <li>Independent</li>
            <li>Travel Girls</li>
            <li>Local</li>
            <li>Agencios</li>
            <li>Boys</li>
            <li>Trans</li>
            <li>Cams</li>
            <li>Reviews</li>
            <li>Classified Ads</li>
          </ul>
        </div>
      </Desktop>
      <Mobile>
        <div className="mobileMenu">
          <MenuIcon className="menuIcon" />
        </div>
      </Mobile>
    </header>
  );
};
