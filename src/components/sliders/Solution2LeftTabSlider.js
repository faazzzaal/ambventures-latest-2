import { sliderProps } from "@/src/common/sliderProps";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2LeftTabSlider = () => {
  const [active, setActive] = useState("#tab-l-1");
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          An Ocean Data For You
        </span>
        <h2 className="mil-mb-90">
          Our <span className="mil-accent">Approaches</span> to the Projects
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
                  Project Assessment and Planning
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-2"
                  className={`mil-h4 ${active == "#tab-l-2" && "mil-active"}`}
                >
                  Execution and Migration
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-3"
                  className={`mil-h4 ${active == "#tab-l-3" && "mil-active"}`}
                >
                  Testing and Quality Assurance
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-4"
                  className={`mil-h4 ${active == "#tab-l-4" && "mil-active"}`}
                >
                  Deployment and Launch
                </a>
              </li>
              <li>
                <a
                  href="#tab-l-5"
                  className={`mil-h4 ${active == "#tab-l-5" && "mil-active"}`}
                >
                  Ongoing Support and Optimization
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
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Collaborate with our experts to assess project requirements,
                    outline goals, and create a comprehensive plan tailored to
                    your business needs.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Seamlessly execute the plan with a focus on efficient
                    migration, ensuring minimal downtime and disruption to your
                    operations.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Rigorously test the newly implemented solutions to guarantee
                    functionality, security, and performance meet the highest
                    standards.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Execute the final deployment, ensuring a smooth transition
                    and optimal performance as your new cloud, migration, or
                    server solution goes live.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    Post-launch, benefit from continuous support, monitoring,
                    and optimization to ensure your systems evolve with your
                    business and industry trends.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solution2LeftTabSlider;
