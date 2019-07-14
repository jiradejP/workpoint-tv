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
  Drawer,
  Button
} from "antd";
const { Header, Footer, Content } = Layout;

/* eslint-disable import/first */
import Slider from "react-slick";
// import $ from "jquery";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      width: 71.5,
      visible: false,
      zIndexDrawer: -1,
      bgColor: "transparent",
      videoPosition: "absolute",
      // 1920
      videoWidth: "",
      videoHeight: "",
      videoTop: "",
      videoLeft: "",
      buttonVideoWidth: "",
      buttonVideoHeight: "",
      buttonVideoTop: "",
      closeButtonDisplay: "none",
      isClose: "block",
      settingsIpadPro: 4,
      settingsSliderIpadPro: 4,
      videoClass: "absolute"
    };
  }

  componentWillMount() {
    window.addEventListener("scroll", this.videoScrollDownEvent);
    if (window.screen.width >= 1920) {
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1920px
        this.setState({
          videoWidth: 479,
          videoHeight: 267,
          videoLeft: 1391,
          videoTop: -56,
          videoPosition: "fixed",
          buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          buttonVideoTop: 267,
          closeButtonDisplay: "block",
          settingsIpadPro: 4,
          isClose: "block"
        });
      } else if (window.scrollY < 400) {
        this.setState({
          videoWidth: 638,
          videoHeight: 358,
          videoTop: -341,
          videoLeft: 864,
          buttonVideoWidth: 638,
          buttonVideoHeight: 60,
          buttonVideoTop: 358,
          videoPosition: "absolute !important",
          closeButtonDisplay: "none",
          isClose: "block",
          settingsIpadPro: 4
        });
      }
    } else if (window.screen.width >= 1366) {
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1920px
        this.setState({
          videoPosition: "fixed",
          videoWidth: 616,
          videoHeight: 342,
          videoLeft: 601,
          videoTop: -276,
          buttonVideoWidth: 616,
          buttonVideoTop: 342,
          // buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          // buttonVideoTop: 267,
          closeButtonDisplay: "block",
          settingsIpadPro: 4
        });
      } else if (window.scrollY < 400) {
        this.setState({
          videoWidth: 607,
          videoHeight: 341,
          videoTop: -472,
          videoLeft: 609,
          buttonVideoWidth: 607,
          buttonVideoHeight: 60,
          buttonVideoTop: 341,
          videoPosition: "absolute",
          closeButtonDisplay: "none",
          isClose: "block",
          settingsIpadPro: 4
        });
      }
    } else if (window.screen.width >= 1280) {
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1280px
        this.setState({
          videoPosition: "fixed",
          videoWidth: 479,
          videoHeight: 269,
          videoLeft: 751,
          videoTop: -111,
          buttonVideoWidth: 479,
          buttonVideoTop: 269,
          // buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          // buttonVideoTop: 267,
          closeButtonDisplay: "block",
          settingsIpadPro: 4,
          videoClass: "fixed"
        });
      } else if (window.scrollY < 400) {
        this.setState({
          videoWidth: 607,
          videoHeight: 342,
          videoTop: -498,
          videoLeft: 568,
          buttonVideoWidth: 607,
          buttonVideoHeight: 60,
          buttonVideoTop: 341,
          videoPosition: "absolute",
          closeButtonDisplay: "none",
          isClose: "block",
          settingsIpadPro: 4,
          videoClass: "absolute"
        });
      }
    } else if (window.screen.width >= 1024) {
      this.setState({
        videoWidth: 607,
        videoHeight: 342,
        videoTop: -498,
        videoLeft: 568,
        buttonVideoWidth: 607,
        buttonVideoHeight: 60,
        buttonVideoTop: 341,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 3,
        width: 55.5,
        videoPosition: "absolute"
      });
    } else if (window.screen.width >= 768) {
      this.setState({
        videoWidth: 607,
        videoHeight: 342,
        videoTop: -498,
        videoLeft: 200,
        buttonVideoWidth: 607,
        buttonVideoHeight: 60,
        buttonVideoTop: 341,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 3,
        width: 41.5,
        videoPosition: "absolute"
      });
    } else if(window.screen.width >= 414) {
    //   width: 385px;
    // height: 242px;
      this.setState({
        videoWidth: 385,
        videoHeight: 242,
        videoTop: -498,
        videoLeft: 200,
        buttonVideoWidth: 385,
        buttonVideoHeight: 60,
        buttonVideoTop: 242,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 1,
        width: 18.5,
        videoPosition: "absolute",
        settingsSliderIpadPro: 1
      })
    } else if(window.screen.width >= 375) {
      this.setState({
        videoWidth: 348,
        videoHeight: 242,
        videoTop: -561,
        videoLeft: 200,
        buttonVideoWidth: 348,
        buttonVideoHeight: 60,
        buttonVideoTop: 242,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 1,
        width: 18.5,
        videoPosition: "absolute",
        settingsSliderIpadPro: 1
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    window.addEventListener("scroll", this.videoScrollDownEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1) {
      this.setState({ bgColor: "#004393" });
    } else {
      this.setState({ bgColor: "transparent" });
    }
  };
  closeVideo = () => {
    this.setState({
      isClose: "none"
    });
  };
  videoScrollDownEvent = e => {
    if (window.screen.width >= 1920) {
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1920px
        this.setState({
          videoWidth: 479,
          videoHeight: 267,
          videoLeft: 1391,
          videoTop: -56,
          videoPosition: "fixed",
          buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          buttonVideoTop: 267,
          closeButtonDisplay: "block",
          videoClass: "fixed",
          isClose: "block"
        });
      } else if (window.scrollY < 400) {
        this.setState({
          videoWidth: 638,
          videoHeight: 358,
          videoTop: -341,
          videoLeft: 864,
          buttonVideoWidth: 638,
          buttonVideoHeight: 60,
          buttonVideoTop: 358,
          videoPosition: "absolute !important",
          closeButtonDisplay: "none",
          isClose: "block",
          videoClass: "absolute"
        });
      }
    } else if (window.screen.width >= 1366) {
      // console.log(this.state.videoClass);
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1366px
        // console.log(">=400")
        this.setState({
          videoPosition: "fixed",
          videoWidth: 479,
          videoHeight: 269,
          videoLeft: 838,
          videoTop: -366,
          buttonVideoWidth: 479,
          buttonVideoTop: 269,
          // buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          // buttonVideoTop: 267,
          closeButtonDisplay: "block",
          videoClass: "fixed"
        });
      } else if (window.scrollY < 400) {
        // console.log("<400")
        this.setState({
          videoWidth: 607,
          videoHeight: 341,
          videoTop: -472,
          videoLeft: 609,
          buttonVideoWidth: 607,
          buttonVideoHeight: 60,
          buttonVideoTop: 341,
          videoPosition: "absolute !important",
          closeButtonDisplay: "none",
          isClose: "block",
          videoClass: "absolute"
        });
      }
    } else if (window.screen.width >= 1280) {
      if (window.scrollY >= 400 && this.state.isClose === "block") {
        // 1280px
        this.setState({
          videoPosition: "fixed",
          videoWidth: 479,
          videoHeight: 269,
          videoLeft: 751,
          videoTop: -111,
          buttonVideoWidth: 479,
          buttonVideoTop: 269,
          // buttonVideoWidth: 479,
          buttonVideoHeight: 60,
          // buttonVideoTop: 267,
          closeButtonDisplay: "block",
          videoClass: "fixed"
        });
      } else if (window.scrollY < 400) {
        this.setState({
          videoWidth: 607,
          videoHeight: 342,
          videoTop: -498,
          videoLeft: 568,
          buttonVideoWidth: 607,
          buttonVideoHeight: 60,
          buttonVideoTop: 341,
          videoPosition: "absolute",
          closeButtonDisplay: "none",
          isClose: "block",
          videoClass: "absolute"
        });
      }
    } else if (window.screen.width >= 1024) {
      this.setState({
        videoWidth: 607,
        videoHeight: 342,
        videoTop: -498,
        videoLeft: 200,
        buttonVideoWidth: 607,
        buttonVideoHeight: 60,
        buttonVideoTop: 341,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 3,
        width: 55.5,
        videoPosition: "absolute"
      });
    } else if (window.screen.width >= 768) {
      this.setState({
        videoWidth: 607,
        videoHeight: 342,
        videoTop: -498,
        videoLeft: 200,
        buttonVideoWidth: 607,
        buttonVideoHeight: 60,
        buttonVideoTop: 341,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 3,
        width: 41.5,
        videoPosition: "absolute"
      });
    } else if(window.screen.width >= 414) {
      //   width: 385px;
      // height: 242px;
        this.setState({
          videoWidth: 385,
          videoHeight: 242,
          videoTop: -561,
          videoLeft: 200,
          buttonVideoWidth: 385,
          buttonVideoHeight: 60,
          buttonVideoTop: 242,
          isClose: "block",
          videoClass: "absolute",
          closeButtonDisplay: "none",
          settingsIpadPro: 1,
          width: 18.5,
          videoPosition: "absolute",
          settingsSliderIpadPro: 1
        })
    } else if(window.screen.width >= 375) {
      this.setState({
        videoWidth: 348,
        videoHeight: 242,
        videoTop: -561,
        videoLeft: 200,
        buttonVideoWidth: 348,
        buttonVideoHeight: 60,
        buttonVideoTop: 242,
        isClose: "block",
        videoClass: "absolute",
        closeButtonDisplay: "none",
        settingsIpadPro: 1,
        width: 18.5,
        videoPosition: "absolute",
        settingsSliderIpadPro: 1
      })
    }
  };

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
    console.log(this.state.isClose);
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
      slidesToShow: this.state.settingsIpadPro,
      // slidesToShow: 4,
      // slidesToShow: 3,
      slidesToScroll: 1,
      useCSS: true
    };
    const settingsSlider = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.settingsSliderIpadPro,
      slidesToScroll: 4
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
        <Header
          id="header-wrapper"
          class="nav-container nav-container navbar "
          style={{ backgroundColor: this.state.bgColor }}
        >
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
          <div className="nav-list-contant">
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
          </div>
        </Header>
        <Content>
          <section className="first-section-Container">
            <Carousel dots={false} autoplay className="img-slide">
              <div>
                <img
                  className="height-carousel"
                  src="https://site-assets.mediaoxide.com/workpointtv/2019/06/20084046/sweet3200x1500.jpg"
                />
              </div>
              <div>
                <img
                  className="height-carousel"
                  src="https://site-assets.mediaoxide.com/workpointtv/2019/06/20084221/10f10-3200x1500.jpg"
                />
              </div>
              <div>
                <img
                  className="height-carousel"
                  src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21093518/desktop-3200x1500.jpg"
                />
              </div>
              <div>
                <img
                  className="height-carousel"
                  src="https://site-assets.mediaoxide.com/workpointtv/2019/06/21091307/3200x15001.jpg"
                />
              </div>
            </Carousel>
            <div
              id="affix-video"
              className="affix-video"
              style={{
                display: this.state.isClose,
                position: this.state.videoClass
              }}
            >
              <div
                className="video-button-css"
                style={{
                  width: this.state.videoWidth,
                  height: this.state.videoHeight,
                  marginTop: this.state.videoTop,
                  marginLeft: this.state.videoLeft
                }}
              >
                <iframe
                  class="video-css"
                  style={{
                    width: this.state.videoWidth,
                    height: this.state.videoHeight
                  }}
                  // width="616"
                  // height="342"
                  src="https://www.youtube.com/embed/0cxA-LlQUDg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <div
                  className="bg-button-video"
                  style={{
                    width: this.state.buttonVideoWidth,
                    height: this.state.buttonVideoHeight,
                    marginTop: this.state.buttonVideoTop
                  }}
                >
                  <a>
                    <center className="font-center">แสดงผังรายการ ></center>
                  </a>
                </div>
                <Button
                  className="button-affix-video"
                  shape="circle"
                  icon="close"
                  style={{
                    display: this.state.closeButtonDisplay
                  }}
                  onClick={this.closeVideo}
                />
              </div>
            </div>
            {/* </Affix> */}
          </section>
          <section className="second-section-Container">
            <div className="highlight-text">
              <h1>รายการไฮท์ไลท์</h1>
              <div className="highlight-video">
                <div
                  style={{
                    width: this.state.width + "rem",
                    display: this.state.display ? "block" : "none"
                  }}
                >
                  <Slider {...settings}>
                    <div className="card-slick-highlight">
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
                <Col className="col-last-video1" span={12}>
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
                <Col className="col-last-video2" span={12}>
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
                <ul className="ul-video">
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
              <div className="last-song-slick">
                <Slider {...settingsSlider}>
                  <div>
                    <div className="video-slick-last-song ">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26044811/2019-06-26_114654.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      เหงาจนเงาหนี – นัน อนันต์ [Official Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song ">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26041648/2019-06-26_111431.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      15 ที่ข้าแพ้ – เท่ง เถิดเทิง [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033645/2019-06-26_103536.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      งึดหลาย – ก้อง ก้องสมุทร [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033438/2019-06-26_103318.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      คิดถึงจนสับสน – ซัน วงศธร [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033438/2019-06-26_103318.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      อย่าฟ้าวเมื่อยเด้อหล่า – เป้ วีระศักดิ์ [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033119/2019-06-26_103003.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      ฮักเขาหลายกะไปสา – แจ็ค ชาลีนาง [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041808/jjjjjj2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      หมดมุก – จ่อย รวมมิตร [Official MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041807/jjj2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      อ้ายคนเก่าไปไส – แอน สุนิสา [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041805/aaa2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      บ่ได้หลายใจแต่ฮักหลายคน – กบ สุพจน์ [Official MV]
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
          <section className="sixth-section-Container">
            <div className="sixth-div">
              <h1 className="entertainment-news">ข่าวบันเทิง</h1>
              <div className="last-song-slick">
                <Slider {...settingsSlider}>
                  <div>
                    <div className="video-slick-last-song ">
                      <a>
                        <img
                          class="cleverse-rounded"
                          src="https://site-assets.mediaoxide.com/workpointnews/2019/07/12201627/1562937380_70309_2-1024x538.png"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      "อั้ม" เผยความรู้สึก หลังช่วยซื้อกระเป๋าแฟนคลับลูกป่วย
                      รับเคยโดนหลอกเป็นล้านเพราะสงสาร​{" "}
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song ">
                      <a>
                        <img
                          class="cleverse-rounded"
                          src="https://site-assets.mediaoxide.com/workpointnews/2019/07/12155358/1562921630_13048_01-1024x538.png"
                        />{" "}
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      4 โค้ชแร็ปเปอร์ ซุ่มซ้อมโชว์พิเศษ "YAMAHA Presents THE
                      RAPPER ALL STAR CONCERT"
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded"
                          src="https://site-assets.mediaoxide.com/workpointnews/2019/07/12145954/1562918387_81192_1-1024x538.png"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      "ดีเจแมน" โพสต์คลิปคนกระชากสร้อย ลั่นอยากต่อยคนแบบนี้ใน 10
                      Fight 10 ซีซั่นหน้า{" "}
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded"
                          src="https://site-assets.mediaoxide.com/workpointnews/2019/07/12160915/1562922551_95399_Untitled-5-1024x538.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      สายกินไม่ควรพลาด ! จัดอันดับ พ่อค้าแม่ค้าคนไหน
                      เปิดร้านมานานที่สุด ?
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033438/2019-06-26_103318.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      อย่าฟ้าวเมื่อยเด้อหล่า – เป้ วีระศักดิ์ [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/06/26033119/2019-06-26_103003.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      ฮักเขาหลายกะไปสา – แจ็ค ชาลีนาง [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041808/jjjjjj2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      หมดมุก – จ่อย รวมมิตร [Official MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041807/jjj2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      อ้ายคนเก่าไปไส – แอน สุนิสา [Lyrics MV]
                    </p>
                  </div>

                  <div>
                    <div className="video-slick-last-song">
                      <a>
                        <img
                          class="cleverse-rounded "
                          src="https://site-assets.mediaoxide.com/workpointtv/2019/05/30041805/aaa2.jpg"
                        />
                        <div class="btn-play1">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </a>
                    </div>
                    <p className="description-video-slick">
                      บ่ได้หลายใจแต่ฮักหลายคน – กบ สุพจน์ [Official MV]
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </Content>
        <Footer className="footer-end">
          <div className="footer-contant-end">
            <Row>
              <Col span={9} className="footer-col">
                <div class="logo_container">
                  <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/logo-wptv.png" />
                </div>
                <div className="footer-first">
                  <ul className="ul-list-footer">
                    <li>
                      <a>
                        <h3 className="text-footer">ข้อมูลบริษัท</h3>
                      </a>
                    </li>
                    <li>
                      <a>
                        <h3 className="text-footer">ติดต่อสอบถาม</h3>
                      </a>
                    </li>
                    <li>
                      <a>
                        <h3 className="text-footer">contant licensing</h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={9} className="footer-col">
                <div className="footer-col-9">
                  <h3 className="text-footer">ติดตามเรา</h3>
                  <div className="icon-footer">
                    <Row>
                      <Col span="3">
                        <a class="fa fa-facebook" />
                      </Col>
                      <Col span="3">
                        <a class="fa fa-twitter" />
                      </Col>
                      <Col span="3">
                        <a class="fa fa-youtube" />
                      </Col>
                      <Col span="3">
                        <a class="fa fa-instagram" />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="download-application-footer">
                  <h3 className="text-footer">ดาวน์โหลดแอพพลิเคชัน</h3>
                  <div className="download-application">
                    <Row>
                      <Col span="8">
                        <a>
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/appstore.png" />
                        </a>
                      </Col>
                      <Col span="12" className="col-google-play-icon">
                        <a>
                          <img
                            className="google-play-icon"
                            src="https://www.workpointtv.com/wp-content/themes/wptv/assets/playstore.png"
                          />
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col span={6} className="footer-col footer-col-6">
                <div className="text-footer-third">
                  <p className="edit-text-footer-third one">ติดต่อโฆษณา</p>
                  <p className="edit-text-footer-third two">02-833-2000</p>
                </div>
                <div className="text-copyright">
                  <p>COPYRIGHT © 2019</p>
                  <p>THAI BROADCASTING COMPANY LIMITED</p>
                  <p>ALL RIGHTS RESERVED.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default Home;
