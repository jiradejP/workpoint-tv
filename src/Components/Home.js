import React, { Component } from "react";
import "antd/dist/antd.css";
import "../Styles/home.css";
import {
  Layout,
  Icon,
  Menu,
  Dropdown,
  Carousel,
  Card,
  Row,
  Col,
  Drawer
} from "antd";
const { Header, Footer, Content } = Layout;

/* eslint-disable import/first */
import Slider from "react-slick";
// import jQuery from 'jquery'

class Home extends Component {
  state = {
    display: true,
    width: 71.5,
    visible: false,
    zIndexDrawer: -1
  };
  // componentDidMount() {
  //   const $ = window.$;
  //   jQuery(function() {
  //     jQuery(window).scroll(function() {
  //         var height = jQuery('.first-container').height();
  //         var scrollTop = jQuery(window).scrollTop();
  //         if (scrollTop >= height - 40) {
  //           jQuery('.nav-container').addClass('solid-nav');
  //         } else {
  //           jQuery('.nav-container').removeClass('solid-nav');
  //         }

  //     });
  // });
  // }
  showDrawer = () => {
    this.setState({
      visible: true,
      zIndexDrawer: 1000
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  afterVisibleChange = () => {
    if (this.state.visible === false) {
      this.setState({
        zIndexDrawer: -1
      });
    }
  };
  render() {
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      useCSS: true
    };
    const { Meta } = Card;
    return (
      <Layout>
        <Drawer
          className="drawer-content-wrapper"
          title=""
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          width="320"
          maskClosable={true}
          zIndex={this.state.zIndexDrawer}
          afterVisibleChange={this.afterVisibleChange}
        >
          <div className="side-drawer">
            <a href="#">
              <img
                className="img-nav-logo"
                src="https://www.workpointtv.com/wp-content/themes/wptv/assets/logo-wptv.png"
              />
            </a>
            <div className="list-side-drawer">
              <Row className="list-side-drawer-detail">
                <a href="#">
                  รายการสด&nbsp;
                  <span class="red-live" />
                </a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">รายการ</a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">ผังรายการ</a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">ศิลปินดารา</a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">เพลง</a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">ข่าวประชาสัมพันธ์</a>
              </Row>
              <Row className="list-side-drawer-detail">
                <a href="#">Content Lisence</a>
              </Row>
            </div>
          </div>
        </Drawer>
        <Header id="header-wrapper" class="nav-container">
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
                <a onClick={this.showDrawer}>
                  <Icon
                    className="icon-nav menu-icon material-icons menu-ham-icon"
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
        <Content>
          <section className="first-section-Container">
            <Carousel dots={false} autoplay className="img-slide">
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
            <div className="video-button-css">
              <iframe
                class="video-css"
                width="616"
                height="342"
                src="https://www.youtube.com/embed/0cxA-LlQUDg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="bg-button-video">
                <a href="#">
                  <center className="font-center">แสดงผังรายการ ></center>
                </a>
              </div>
              {/* <div className="bg-button-video">hello</div> */}
            </div>
          </section>
          <section className="second-section-Container">
            <div className="highlight-text">
              <h1>รายการไฮท์ไลท์</h1>
              <div>
                <div
                  style={{
                    width: this.state.width + "rem",
                    display: this.state.display ? "block" : "none"
                  }}
                >
                  <Slider {...settings}>
                    <div>
                      <Card
                        className="card-slick"
                        hoverable
                        style={{ width: 260 }}
                        cover={
                          <img
                            className="card-img-slick"
                            alt="example"
                            src="https://site-assets.mediaoxide.com/workpointtv/2019/03/07054429/238x338.jpg"
                          />
                        }
                      >
                        <Meta title="The Mask วรรณคดีไทย" description="" />
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="card-slick"
                        hoverable
                        style={{ width: 260 }}
                        cover={
                          <img
                            className="card-img-slick"
                            alt="example"
                            src="https://site-assets.mediaoxide.com/workpointtv/2019/07/03091120/238x338.jpg"
                          />
                        }
                      >
                        <Meta
                          title="The Big Kitchen เดอะบิ๊ก คิทเชน"
                          description=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="card-slick"
                        hoverable
                        style={{ width: 260 }}
                        cover={
                          <img
                            className="card-img-slick"
                            alt="example"
                            src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21093515/238x3388.jpg"
                          />
                        }
                      >
                        <Meta
                          title="คู่เฟค คู่แฟน Fake Lovers"
                          description=""
                        />
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="card-slick"
                        hoverable
                        style={{ width: 260 }}
                        cover={
                          <img
                            className="card-img-slick"
                            alt="example"
                            src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21091304/238x3387.jpg"
                          />
                        }
                      >
                        <Meta title="Kids Stronger Season 2" description="" />
                      </Card>
                    </div>
                    <div>
                      <Card
                        className="card-slick"
                        hoverable
                        style={{ width: 260 }}
                        cover={
                          <img
                            className="card-img-slick"
                            alt="example"
                            src="https://site-assets.mediaoxide.com/workpointtv/2019/06/09033209/Sweet-Chef238x338.jpg"
                          />
                        }
                      >
                        <Meta title="Sweet Chef Thailand" description="" />
                      </Card>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <section className="third-section-Container">
            <div className="highlight-text">
              <h1>วีดีโอล่าสุด</h1>
              <Row>
                <Col span={12}>
                  <iframe
                    class="last-video-css"
                    width="97.3%"
                    height="337"
                    src="https://www.youtube.com/embed/Vcwmt4Y7cV8"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </Col>
                <Col span={12}>
                  <div>
                    <h1 className="text-last-video">
                      ไมค์หมดหนี้ EP.602 |
                      ป้านวลต่อสู้โรคร้ายและความลำบากไหวังให้ลูกได้ดีก่อนตาย |
                      10 ก.ค. 62
                    </h1>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="load-more-container">
              <div className="load-more-video">
                <input type="checkbox" id="load-more" />
                <ul>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/TxfHe0LW9EE/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/dWYkUMHZ8gM/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/aIhRwrQoOJ8/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/_jl-NhFMikQ/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/MXKPvtBcUis/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/knGV24XkIZ0/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/M7cPh6ggeQ8/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/0cxA-LlQUDg/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/1IWCF1OJcks/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/QWbFsF4hL-o/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/HorEeZOjcn4/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/IsE1sRD6-1U/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/TxfHe0LW9EE/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/Aa0iKwnLbko/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/XKzzhA0ZoOA/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                  <li className="load-more-video-detail">
                    <div>
                      <img
                        class="cleverse-rounded"
                        src="https://img.youtube.com/vi/zYe24qh3orA/mqdefault.jpg"
                      />
                      <p className="text-load-more-video">
                        อภินิหารกระบี่สามภพ | EP.9 | 6 ก.ค. 62
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="load-more-button">
                <label className="load-more-btn" for="load-more">
                  <a className="load-more-btn unloaded" for="load-more">
                    ดูเพิ่ม{" "}
                  </a>
                  <Icon type="down" className="icon-unloaded" />
                  {/* <span className="loaded" > View less</span> */}
                </label>
              </div>
            </div>
          </section>
          <section className="foth-section-Container">
            <a className="suggestion-video-container">
              {/* <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/banner-bg.png" /> */}
              <div>
                <Row className="row-suggrestion" gutter={8}>
                  <Col className="col-1-suggestion" span={9}>
                    <div>
                      <h5 className="text-suggestion text-suggestion-h5">
                        วิดีโอแนะนำ
                      </h5>
                    </div>
                    <div>
                      <h1 className="text-suggestion text-suggestion-h1">
                        I Can See Your Voice -TH | EP.177 | นัท มีเรีย | 10 ก.ค.
                        62
                      </h1>
                    </div>
                    <div>
                      <h5 className="text-suggestion text-suggestion-h5-2">
                        จากรายการประกวดร้องเพลงระดับโลก
                        พร้อมระเบิดเสียงฮาครั้งแรกในเมืองไทย
                        เมื่อนักร้องซูเปอร์สตาร์ต้องหาคู่ฟีเจอริ่ง ใครเพราะ
                        ใครเพี้ยน ติดตามได้ใน I can see your voice Thailand{" "}
                      </h5>
                    </div>
                  </Col>
                  <Col className="col-2-suggestion" span={15}>
                    <iframe
                      className="col-2-suggestion-video"
                      width="669"
                      height="402"
                      src="https://www.youtube.com/embed/6-E9zTgyKXM"
                      frameborder="0"
                      allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </Col>
                </Row>
              </div>
            </a>
          </section>
          <section className="fifth-section-Container">
            <div className="fifth-div">
              <h1 className="last-song">เพลงล่าสุด</h1>
            </div>
          </section>

          <section className="sixth-section-Container">
            <div className="sixth-div">
              <h1>ข่าวบันเทิง</h1>
            </div>
          </section>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Home;
