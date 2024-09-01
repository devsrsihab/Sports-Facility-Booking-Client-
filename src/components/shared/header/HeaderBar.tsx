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

  const filteredMenus = authToken
    ? menus.filter((menu) => menu.key !== "login" && menu.key !== "register")
    : menus.filter((menu) => menu.key !== "borrowed");

  const activeMenuItem =
    menus.find((menu) => pathname === menu.path)?.key || "home";

  return (
    <div
      className="header-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto", 
        whiteSpace: "nowrap",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[activeMenuItem]}
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          borderBottom: "none",
        }}
      >
        {filteredMenus.map(({ key, label, path }) => (
          <Menu.Item
            key={key}
            style={{
              backgroundColor:
                activeMenuItem === key ? "#008f70" : "transparent",
            color: activeMenuItem === key ? "#fff" : "inherit",
            }}
          >
            <Link to={path}>{label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderBar;
