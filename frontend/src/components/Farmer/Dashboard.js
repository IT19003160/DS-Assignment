import { useState } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  PullRequestOutlined,
  AuditOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const SupervisorDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();

  const { username } = useParams();

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.setItem("authToken", null);
    localStorage.removeItem("email");
    localStorage.removeItem("type");
    history("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <center>
          <HomeOutlined
            style={{ color: "white", marginTop: "50px", cursor: "pointer" }}
          />
        </center>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item
            key="0"
            icon={<PullRequestOutlined />}
            onClick={() => {
              history(`/farmer-dashboard/${localStorage.getItem("username")}`);
            }}
          >
            Add Item
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<AuditOutlined />}
            onClick={() => {
              history(`/farmer-dashboard/${localStorage.getItem("username")}`);
            }}
          >
            View Items
          </Menu.Item>
        </Menu>

        <br />
        <br />
        {collapsed === false ? (
          <center>
            <Button icon={<LogoutOutlined />} onClick={logoutHandler}>
              Sign Out
            </Button>
          </center>
        ) : (
          <center>
            <LogoutOutlined
              style={{ color: "white" }}
              onClick={logoutHandler}
            />
          </center>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <h1 id="header" style={{ fontFamily: "serif", fontSize: "20px" }}>
            {/* {queryL === "leave"
              ? "Leave Requests"
              : queryE === "employee"
              ? "Employee Details"
              : queryEdit === "true"
              ? "Edit Employee Details"
              : queryA === "add"
              ? "Add Employee"
              : queryH === "history"
              ? "Leave History"
              : queryR === "request"
              ? "Password Reset Request"
              : queryApply === "true"
              ? "Apply For Leave"
              : queryMy === "view"
              ? "My Leaves"
              : queryProfile === "my"
              ? "My Profile"
              : queryUEdit === "true"
              ? "Edit Your Profile"
              : "Dashboard"} */}
          </h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{greet}</Breadcrumb.Item>
            <Breadcrumb.Item>{username}</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} Agri Product Online Purchasing
          Platform
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SupervisorDashboard;
