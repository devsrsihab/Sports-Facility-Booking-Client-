import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { currentToken } from "../../../redux/features/auth/authSlice";

const menus = [
  {
    key: "home",
    label: `Home`,
    path: "/",
  },
  {
    key: "facilities",
    label: `Facility`,
    path: "/facilities",
  },
  {
    key: "about",
    label: `About`,
    path: "/about",
  },
  {
    key: "contact",
    label: `Contact`,
    path: "/contact",
  },
  {
    key: "register",
    label: `Register`,
    path: "/register",
  },
  {
    key: "login",
    label: `Login`,
    path: "/auth/login",
  },
];

const HeaderBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const authToken = useAppSelector(currentToken);

  // Filter menus based on authentication status
  const filteredMenus = authToken
    ? menus.filter((menu) => menu.key !== "login" && menu.key !== "register")
    : menus;

  // Determine the active menu item based on the current pathname
  const activeMenuItem =
    filteredMenus.find((menu) => pathname === menu.path)?.key || "home";

  return (
    <div className="header-bar">
      <Menu
        mode="horizontal"
        selectedKeys={[activeMenuItem]}
        style={{
          display: "flex",
          background: "#001529",
          flexGrow: 1,
          justifyContent: "center",
          borderBottom: "none",
        }}
        items={filteredMenus.map(({ key, label, path }) => ({
          key,
          label: <Link to={path}>{label}</Link>,
          style: {
            backgroundColor: activeMenuItem === key ? "#008f70" : "transparent",
            color: activeMenuItem === key ? "#fff" : "#a6adb4",
          },
        }))}
      />
    </div>
  );
};

export default HeaderBar;
