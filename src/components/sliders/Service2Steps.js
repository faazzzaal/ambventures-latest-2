import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { clickedTabsSliderButton } from "./Solution1About";

const Service2Steps = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Enterprise
        </span>
        <h2 className="mil-mb-120">
          How We <span className="mil-accent">Deliver Our UI/UX</span> Design
          Services
        </h2>
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
                  <h3>Collaborative Discovery</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      We begin by engaging in collaborative discovery sessions,
                      where we work closely with your team to understand your
                      vision, goals, and user expectations.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      This collaborative approach ensures that our designs align
                      perfectly with your brand identity and business
                      objectives.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
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
                    <img src="img/solution/uiux_1.png" alt="img" />
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
                  <h3>Iterative Prototyping</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Our iterative prototyping process allows for dynamic
                      feedback loops, ensuring that your vision evolves into a
                      tangible and user-friendly product.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      By involving you in each stage, we tailor the design to
                      meet your evolving needs, resulting in a solution that
                      resonates with your audience.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
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
                    <img src="img/solution/uiux_2.png" alt="img" />
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
                  <h3>User-Centric Design Workshops</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      We conduct user-centric design workshops to empathize with
                      your target audience, gaining valuable insights that
                      inform our design decisions.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      This user-focused approach ensures that the final product
                      not only looks stunning but also addresses the specific
                      needs and preferences of your users.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
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
                    <img src="img/solution/uiux_3.png" alt="img" />
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
                  <h3>Agile Development Integration</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      Our seamless integration with agile development practices
                      ensures a smooth transition from design to development.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      This collaborative synergy ensures that our UI/UX designs
                      are not only visually appealing but also functionally
                      robust, creating a cohesive and impactful digital
                      experience for your users.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
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
                    <img src="img/solution/uiux_4.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a
            className="mil-active"
            href="#tab1"
            onClick={clickedTabsSliderButton}
          >
            <span>Collaborative Discovery</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>Iterative Prototyping</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span>User-Centric Design Workshops</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>Agile Development Integration</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Service2Steps;
