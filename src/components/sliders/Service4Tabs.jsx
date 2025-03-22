import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Service4Tabs = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">""</span> */}
        <h2 className="mil-mb-90">
          <span className="mil-accent">End-to-End</span> Website Development
          Services
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li>
                <a href="#tab-l-1" className="mil-h4 mil-active">
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="mil-h4">
                  UI/UX Development Design
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="mil-h4">
                  Development, QA, and Launch
                </a>
              </li>
              {/* <li>
                <a href="#tab-l-4" className="mil-h4">
                  QA (Quality Assurance)
                </a>
              </li>
              <li>
                <a href="#tab-l-5" className="mil-h4">
                  Launch
                </a>
              </li> */}
              <li>
                <a href="#tab-l-6" className="mil-h4">
                  Maintenance &amp; Support
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
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Start your website development journey with thorough
                      discovery and research. We collaborate with you to
                      understand your goals, target audience, and market,
                      setting the stage for a website that resonates with your
                      brand.
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
                      Elevate your website's visual appeal and user experience.
                      Our designers create intuitive interfaces that engage
                      visitors, ensuring a seamless journey from the moment they
                      land on your site. .
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
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Experience a smooth development process, from coding to
                      quality assurance. Rigorous testing guarantees your
                      website's functionality and performance, culminating in a
                      successful launch that leaves a lasting impression.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Prioritize quality with our dedicated QA services.
                      Rigorous testing processes ensure your mobile application
                      is not only bug-free but also performs seamlessly, meeting
                      the highest standards of reliability and user
                      satisfaction.
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
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Celebrate the fruition of your mobile app as we
                      orchestrate a successful launch. From deployment
                      strategies to app store optimization, we ensure a smooth
                      and impactful entry into the digital marketplace.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide> */}
              <SwiperSlide className="swiper-slide" data-hash="tab-l-6">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      Your website's success doesn't end at launch. We offer
                      ongoing maintenance and support services, ensuring your
                      website remains up-to-date, secure, and aligned with the
                      latest web standards.
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
export default Service4Tabs;
