import { sliderProps } from "@/src/common/sliderProps";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2TabSlider = () => {
  const [active, setActive] = useState("#tab1");
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, left: "15%" }} />
      <div className="container">
        <div className="mil-text-center mil-mb-90">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            A Great Service
          </span>
          <h2 className="mil-mb-30">
            Supercharge <span className="mil-accent">Your Business</span> With
            the Following Approaches
          </h2>
        </div>
        <div className="mil-tab-buttons mil-tab-buttons-2 mil-mb-90">
          <div onClick={(e) => setActive("#tab1")}>
            <a
              href="#tab1"
              className={`mil-h4 ${active == "#tab1" && "mil-active"}`}
            >
              <div>
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                  <img src="img/icons/md/20.svg" alt="icon" />
                </div>
                <h6>Agile Development</h6>
              </div>
            </a>
          </div>
          <div onClick={(e) => setActive("#tab2")}>
            <a
              href="#tab2"
              className={`mil-h4 ${active == "#tab2" && "mil-active"}`}
            >
              <div>
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                  <img src="img/icons/md/21.svg" alt="icon" />
                </div>
                <h6>Cost Optimization</h6>
              </div>
            </a>
          </div>
        </div>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                Embrace agility in development processes. Our approach ensures
                rapid iterations, quick adaptability to changes, and a focus on
                delivering value to your business faster.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                Streamline costs without compromising performance. Our cost
                optimization strategies in cloud and server services help
                maximize your IT investments.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Solution2TabSlider;
