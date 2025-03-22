import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const SolutionMilReviSlider = () => {
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-md-12 col-xl-12">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Cutting-edge tools that drive performance
            </span>
            <h2>
              <span className="mil-accent">
                If your technology is draining resources rather than optimizing
                them, we can get you back on track.{" "}
              </span>
              A professionally managed services provider can give you the
              decisive edge
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container mil-revi-slider mil-mb-90"
        >
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Technical Implementation</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">IT Helpdesk Support</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Managed IT Services</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">IT Consulting</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Network Support</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Field Tech Support</h5>
              <p>
                We offer affordable IT solutions that help you reduce costs and
                improve your bottom line.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="#." className="mil-link">
          <span>Let’s Solve Your Challenges</span>
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
};
export default SolutionMilReviSlider;
