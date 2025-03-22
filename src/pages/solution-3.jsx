import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution3BoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution3BoxSlider"),
  {
    ssr: false,
  }
);
const Solution3ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution3ReviSlider"),
  {
    ssr: false,
  }
);
const Solution3TabsSlider = dynamic(
  () => import("@/src/components/sliders/Solution3TabsSlider"),
  {
    ssr: false,
  }
);

const Solution3 = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Solution"}
        pageTitle={
          <span>
            End to End Custom IoT Software <br /> Development
          </span>
        }
      />
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-text-center mil-mb-90">
            End-to-End <span className="mil-accent"> Custom IoT Software</span>{" "}
            Development
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">
                  Conceptualization
                  <br /> and Planning
                </h5>
                <p>
                  Unleash the power of IoT with our expert team guiding you
                  through the conceptualization and planning phase. We help you
                  define your vision and set a robust foundation for your custom
                  IoT software.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">
                  Development
                  <br /> and Integration
                </h5>
                <p>
                  Witness your ideas come to life as we embark on the
                  development and integration journey. Our skilled developers
                  craft tailored solutions, ensuring seamless integration of IoT
                  functionalities into your software.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">
                  Testing <br />
                  and Deployment
                </h5>
                <p>
                  Rigorous testing and smooth deployment are paramount. We
                  meticulously test your custom IoT software to guarantee
                  optimal performance before deploying it, ensuring a flawless
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-p-0-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/iot_1.jpeg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30"> Smart Manufacturing</h3>
              <p className="mil-mb-30">
                Transform your manufacturing processes with customized IoT
                solutions. Enhance efficiency, monitor equipment health, and
                optimize production through intelligent insights.
              </p>
              <a href="contact" className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover mil-type-2">
                <img src="img/solution/healthcare.jpeg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Healthcare IoT</h3>
              <p className="mil-mb-30">
                Revolutionize healthcare delivery with IoT applications. From
                remote patient monitoring to smart medical devices, our
                solutions improve patient care and streamline healthcare
                operations.
              </p>
              <a href="contact" className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/solution/smartcity.jpeg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Smart Cities</h3>
              <p className="mil-mb-30">
                Contribute to building intelligent cities with IoT. Our
                solutions focus on enhancing urban living through smart
                infrastructure, efficient utilities, and data-driven
                decision-making.
              </p>
              <a href="contact" className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/solution/agriculture.jpeg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Agriculture Technology</h3>
              <p className="mil-mb-30">
                Empower agriculture with IoT-driven precision farming. Monitor
                crop conditions, automate irrigation, and optimize resource
                utilization for sustainable and efficient farming practices.
              </p>
              <a href="contact" className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <Solution3ReviSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* left nav tabs */}
      <Solution3TabsSlider />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* reviews */}
      <Solution3BoxSlider />
      {/* reviews end */}
    </Layouts>
  );
};
export default Solution3;
