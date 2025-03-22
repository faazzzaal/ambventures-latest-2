import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2ReviSlider = () => {
  return (
    <section className="mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-md-6 col-xl-7">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              An Ocean Data For You
            </span>
            <h2>
              Our Solutions to{" "}
              <span className="mil-accent">Power Your Business</span>
            </h2>
          </div>
          <div className="col-md-6 col-xl-5">
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
              <h5 className="mil-mb-30">Cloud Hosting Services</h5>
              <p>
                Leverage the power of the cloud to host your applications and
                data, ensuring reliability, flexibility, and optimal
                performance.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Server Migration</h5>
              <p>
                Seamlessly migrate your servers to the cloud, enhancing
                scalability, reducing costs, and ensuring a smooth transition
                without disruptions.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Data Backup and Recovery</h5>
              <p>
                Safeguard your critical data with our robust backup and recovery
                solutions, minimizing the risk of data loss and ensuring
                business continuity.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Hybrid Cloud Solutions</h5>
              <p>
                Combine the best of both worlds. Our hybrid cloud solutions
                offer the flexibility to utilize both on-premises and cloud
                resources for enhanced efficiency.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Solution2ReviSlider;
