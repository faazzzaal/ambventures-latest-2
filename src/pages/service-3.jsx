import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const Service3NavTabs = dynamic(
  () => import("@/src/components/sliders/Service3NavTabs.jsx"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic(
  () => import("../components/sliders/LatestProjects"),
  { ssr: false }
);

const Service3 = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Service"} pageTitle={"Application Development"} />
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Expertise
            </span>
            <h2 className="mil-mb-30">
              Custom <span className="mil-accent">App Solutions</span> For any
              Mobile Platform
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Android Platform</h5>
                <p className="mil-mb-30">
                  Craft immersive and feature-rich Android applications tailored
                  for a diverse user base, leveraging the power of the Android
                  operating system to deliver seamless experiences on a wide
                  range of devices.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Java</li>
                  <li className="mil-text-sm mil-bold mil-dark">Kotlin</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">IOS Platform</h5>
                <p className="mil-mb-30">
                  Elevate your brand presence on Apple devices with meticulously
                  designed iOS applications, ensuring optimal performance and
                  user engagement through precision coding for iPhones, iPads,
                  and other iOS-powered devices.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Swift</li>
                  <li className="mil-text-sm mil-bold mil-dark">Objective-C</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Cross Platform</h5>
                <p className="mil-mb-30">
                  Drive efficiency and reach a broader audience by developing
                  cross-platform applications that seamlessly run on both
                  Android and iOS, maximizing code reuse and minimizing
                  development time to deliver consistent experiences across
                  different mobile ecosystems
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">
                    React Native
                  </li>
                  <li className="mil-text-sm mil-bold mil-dark">Flutter</li>
                  <li className="mil-text-sm mil-bold mil-dark">Ionic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}

      {/* <LatestProjectsSlider /> */}

      {/* left nav tabs */}
      <Service3NavTabs />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="mil-mb-90">
            <h2 className="mil-mb-30">
              Delivering <span className="mil-accent">Industry Specific</span>{" "}
              Mobile <br />
              App Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/23.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">E-commerce</h5>
                <p>
                  Revolutionize online retail with our tailored mobile apps,
                  enhancing user engagement and optimizing transactions for
                  seamless e-commerce experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  {" "}
                  ERP (Enterprise Resource Planning)
                </h5>
                <p>
                  Empower your business with real-time insights through our
                  customized ERP mobile solutions, seamlessly integrating
                  operations for enhanced efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">SaaS Products</h5>
                <p>
                  Experience next-level collaboration and accessibility with our
                  innovative SaaS mobile solutions, designed to meet the unique
                  needs of your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">MVPs for Startups</h5>
                <p>
                  Fast-track your startup's success with our agile Minimum
                  Viable Products (MVPs), validating ideas and attracting
                  investors with impactful mobile solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  AI & ML (Artificial Intelligence & Machine Learning)
                </h5>
                <p>
                  Unleash intelligent applications for the future with our AI
                  and ML-driven mobile solutions, offering predictive analytics
                  and personalized user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-end mil-mb-60-adapt">
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Tech, Business and Talents
              </span>
              <h2 className="mil-mb-30">
                Next <span className="mil-accent">Gen Tech</span> For Mobile App
                Development
              </h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-30"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <h6>Cloud</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/11.svg" alt="icon" />
                </div>
                <h6>AI / ML</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <h6>AR / VR</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <h6>IoT</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
    </Layouts>
  );
};
export default Service3;
