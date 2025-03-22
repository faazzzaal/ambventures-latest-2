import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution3TabsSlider = () => {
  const [active, setActive] = useState("#tab-l-1");
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Data Analytics Expertise
        </span> */}
        <h2 className="mil-mb-90">
          IoT Development and Implementation{" "}
          <span className="mil-accent">Roadmap</span>
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul
              className="mil-tabs-left-nav mil-mb-60"
              onClick={(e) => setActive(e.target.hash)}
            >
              <li>
                <a
                  href="#tab-l-1"
                  className={`mil-h4 ${active == "#tab-l-1" && "mil-active"}`}
                >
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-2"
                  className={`mil-h4 ${active == "#tab-l-2" && "mil-active"}`}
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-3"
                  className={`mil-h4 ${active == "#tab-l-3" && "mil-active"}`}
                >
                  MVP Rollout and Testing
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-4"
                  className={`mil-h4 ${active == "#tab-l-4" && "mil-active"}`}
                >
                  IoT Scaling
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-5"
                  className={`mil-h4 ${active == "#tab-l-5" && "mil-active"}`}
                >
                  IoT Ecosystem Setup
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
            >
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/24.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Lay the groundwork for success with in-depth Discovery &
                      Research. Our experts delve into your objectives, market
                      dynamics, and technical requirements to craft a
                      comprehensive IoT strategy.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Bring your IoT vision to life with a Minimum Viable
                      Product (MVP). Our development team creates a functional
                      prototype, allowing you to visualize and test the core
                      features of your IoT solution.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/21.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Introduce your MVP to the real world. We roll out your
                      Minimum Viable Product and conduct thorough testing to
                      identify and address any potential issues, ensuring a
                      robust foundation for future development.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/20.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Scale your IoT solution for broader implementation. Our
                      team enhances and expands the functionality of your
                      solution, accommodating increased usage and evolving
                      business needs.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Establish a sustainable IoT ecosystem. We help you set up
                      the infrastructure, connectivity, and data management
                      systems required to support your IoT solution seamlessly.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solution3TabsSlider;
