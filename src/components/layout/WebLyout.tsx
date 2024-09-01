import { Layout, theme, Row, Col } from "antd";
import { Link, Outlet } from "react-router-dom";
import HeaderBar from "../shared/header/HeaderBar";
import AvaterDropdown from "../shared/header/AvaterDropdown";
import Logo from "../shared/header/Logo";
import MenuDrawer from "../shared/header/MenuDrawer";
import { currentToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import "../../App.css";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const { Header, Content, Footer } = Layout;

const WebLyout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const authToken = useAppSelector(currentToken);

  return (
    <Layout className="layout-sr">
      <Header
        className="header-sr sticky z-50  top-0 "
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 24px",
          background: "#001529",
        }}
      >
        <Row
          align="middle"
          justify="space-between"
          gutter={[16, 16]} // Add spacing between columns
          style={{ width: "100%" }}
        >
          <Col xs={0} md={4} lg={5} xl={5}>
            <Logo />
          </Col>
          <Col xs={0} md={16} lg={14} xl={14}>
            <HeaderBar />
          </Col>
          <Col xs={0} md={4} lg={5} xl={5}>
            {authToken && <AvaterDropdown />}
          </Col>
          <Col xs={24} md={0} lg={0} xl={0}>
            <MenuDrawer />
          </Col>
        </Row>
      </Header>
      <Content style={{ background: colorBgContainer }}>
        <Row justify="center" style={{ marginBottom: "24px" }}>
          <Col xs={24} md={20} lg={24}>
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet /> {/* This is where child routes will be rendered */}
            </div>
          </Col>
        </Row>
        <ScrollToTopButton />
      </Content>
      <Footer style={{ textAlign: "center", padding: "12px 24px" }}>
        <div className="flex gap-10 justify-center items-center">
          <p>SRSIHAB Solutions ©{new Date().getFullYear()} Created by SRSIHAB</p>
          <div className="footer_menu flex justify-center items-center gap-5 ">
            <Link className="capitalize font-semibold" to="/about">About</Link>
            <Link className="capitalize font-semibold" to="/contact">Contact</Link>
          </div>
        
        </div>
      </Footer>
    </Layout>
  );
};

export default WebLyout;
