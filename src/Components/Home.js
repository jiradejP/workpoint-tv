import React, { Component } from "react";
import "antd/dist/antd.css";
import "../Styles/home.css";
import { Layout, Icon, Menu, Dropdown, Carousel } from "antd";
const { Header, Footer, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">กีฬา</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">ควิซโชว์</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">ซิทคอม</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="#">ซีรีส์ต่างประเทศ</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a href="#">ทอล์คโชว์</a>
    </Menu.Item>
    <Menu.Item key="5">
      <a href="#">ประกวดร้องเพลง</a>
    </Menu.Item>
    <Menu.Item key="6">
      <a href="#">ละคร</a>
    </Menu.Item>
    <Menu.Item key="7">
      <a href="#">วาไรตี้</a>
    </Menu.Item>
    <Menu.Item key="8">
      <a href="#">เกมโชว์</a>
    </Menu.Item>
    <Menu.Item key="9">
      <a href="#">เรียลลิตี้โชว์</a>
    </Menu.Item>
  </Menu>
);


class Home extends Component {
  
  
  render() {
    return (
      <Layout>
        <div>
          <Header className="header-wrapper">
            <img
              className="img-nav"
              src="https://www.workpointtv.com/wp-content/themes/wptv/assets/head-line.png"
            />
            <div className="header-nav">
              <div className="logo-nav nav-container">
                <div className="logo-container">
                  <a href="#">
                    <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/logo-wptv.png" />
                  </a>
                </div>
                <div className="menu-icon">
                  <a href="#">
                    <Icon className="icon-nav" type="search" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#">
                    <Icon
                      className="icon-nav .menu-icon material-icons menu-ham-icon"
                      type="menu"
                    />
                  </a>
                </div>
              </div>
            </div>
            <ul className="nav nav-container-wrapper nav-container">
              <li className="nav-item">
                <a className="nav-item" href="#">
                  รายการสด&nbsp;
                  <span class="red-live" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a className="ant-dropdown-link nav-item" href="#">
                    รายการ <Icon type="down" />
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <a className="nav-item" href="#">
                  ผังรายการ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item" href="#">
                  ศิลปินดารา
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item" href="#">
                  เพลง
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item" href="#">
                  ข้าวประชาสัมพันธ์
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item" href="#">
                  ข่าวเวิร์คพอยท์
                </a>
              </li>
            </ul>
          </Header>
        </div>
        <Content>
          <section className="first-section-Container">
            <Carousel autoplay>
              <div>
                <img src="https://site-assets.mediaoxide.com/workpointtv/2019/06/20084046/sweet3200x1500.jpg" />
              </div>
              <div>
                <img src="https://site-assets.mediaoxide.com/workpointtv/2019/06/20084221/10f10-3200x1500.jpg" />
              </div>
              <div>
              <img src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21093518/desktop-3200x1500.jpg" />
              </div>
              <div>
              <img src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21091307/3200x15001.jpg" />
              </div>
            </Carousel>
          </section>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Home;
