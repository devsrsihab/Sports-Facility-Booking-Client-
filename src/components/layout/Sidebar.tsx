import { Layout, Menu } from "antd";
import { sidebarRouteGenerator } from "../../utils/sidebarRouteGenerator";
import { adminPaths } from "../../routes/admin.route";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { viewerPaths } from "../../routes/viewer.route";
import { authorPaths } from "../../routes/author.route";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  AUTHOR: "author",
  VIEWER: "viewer",
};

const Sidebar = () => {
  const role = useAppSelector(currentUser);
  let sidebaritems;

  switch (role?.role) {
    case userRole.ADMIN:
      sidebaritems = sidebarRouteGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.AUTHOR:
      sidebaritems = sidebarRouteGenerator(authorPaths, userRole.AUTHOR);
      break;
    case userRole.VIEWER:
      sidebaritems = sidebarRouteGenerator(viewerPaths, userRole.VIEWER);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="demo-logo-vertical"
      >
        <Link to="/">
          <h2>PH University</h2>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebaritems}
      />
    </Sider>
  );
};

export default Sidebar;
