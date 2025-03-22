import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const clickedTabsSliderButton = (event) => {
  const buttons = document.querySelectorAll(".mil-tab-buttons a");
  buttons.forEach((button) => {
    button.classList.remove("mil-active");
  });

  event.currentTarget.classList.toggle("mil-active");
};

const Solution1About = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>IT Service for You</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      We know that every businesses’ needs are completely
                      different from the next, so we offer packages for any
                      business size or budget.
                    </p>
                  </div>
                  {/* <div className="col-lg-6">
                    <p>
                      Our managed services include round-the-clock monitoring of
                      your key infrastructure, computers and network servers.
                    </p>
                  </div> */}
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/ct_1.jpeg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Keeping Your Team Productive</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Our managed services include round-the-clock monitoring of
                      your key infrastructure, computers and network servers.
                    </p>
                  </div>
                  {/* <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div> */}
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/ct_2.jpeg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/11.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Our Team is Ready to Help</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Part of what makes our managed services so exceptional is
                      that we are always available, regardless of time or
                      holiday.
                    </p>
                  </div>
                  {/* <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div> */}
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/ct_3.jpeg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Predictable Costs 24/7</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      We doesn’t charge you more when your network is down or a
                      server fails. Our flat-rate fee programs covers all of
                      that whenever you need it done.
                    </p>
                  </div>
                  {/* <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div> */}
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/solution/ct_4.jpeg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a
            href="#tab1"
            className="mil-active"
            onClick={clickedTabsSliderButton}
          >
            <span>IT Service for You</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>Keeping Your Team Productive</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span>Our Team is Ready to Help</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>Predictable Costs 24/7</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Solution1About;
