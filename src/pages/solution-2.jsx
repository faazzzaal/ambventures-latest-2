import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution2LeftTabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2LeftTabSlider"),
  {
    ssr: false,
  }
);

const Solution2ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution2ReviSlider"),
  {
    ssr: false,
  }
);

const Solution2TabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2TabSlider"),
  {
    ssr: false,
  }
);

const Solution2 = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Solution"}
        pageTitle={"Cloud, Migration and Server Services"}
      />
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-mb-60">
            Making <span className="mil-accent">Business</span> Sense for{" "}
            <span className="mil-accent">Organization</span>
            <br /> Anytime, Anywhere
          </h2>
          <p className="mil-mb-60">
            Elevate your organization's capabilities with our comprehensive
            cloud, migration, and server services. In an era where connectivity
            is key, our solutions empower your users to access critical
            information anytime, anywhere, ensuring seamless business
            operations.
          </p>
          <div className="row">
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/17.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">Flexible Access</h6>
                    <span>
                      Tailor your access needs with our cloud services. Whether
                      in the office or on the go, enjoy the flexibility of
                      accessing your data and applications with ease.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">Scalability</h6>
                    <span>
                      Scale your infrastructure as your business grows. Our
                      solutions ensure that your organization is prepared to
                      meet evolving demands and seize new opportunities.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/18.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">Global Accessibility</h6>
                    <span>
                      Break down geographical barriers. With our cloud
                      solutions, enable users worldwide to connect effortlessly,
                      fostering collaboration and enhancing productivity.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">Security & Compliance</h6>
                    <span>
                      Safeguard your sensitive data. Our cloud and server
                      services prioritize security and compliance, providing you
                      with peace of mind in an ever-evolving digital landscape.
                    </span>
                  </div>
                </div>
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

      <Solution2ReviSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <Solution2TabSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* left nav tabs */}
      <Solution2LeftTabSlider />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "15%" }} />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              A Great Service
            </span>
            <h2 className="mil-mb-30">
              Values That <span className="mil-accent">Lead Us</span>
            </h2>
          </div>
          {/* <div className="row">
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-20">Productivity</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-20">Transparency</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-20">Personality</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-20">Volition</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are</h4>
                  <p className="mil-box-text">
                    At Rahal Tech, 'We Are' signifies unity, where every team
                    member contributes to a collective force driving success and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Deep Dive</h4>
                  <p className="mil-box-text">
                    `In our quest for excellence, 'We Deep Dive' embodies our
                    commitment to thorough exploration, ensuring precision and
                    depth in every solution we provide.`
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Take</h4>
                  <p className="mil-box-text">
                    We Take' represents our proactive stance, seizing challenges
                    as opportunities and taking ownership to deliver impactful
                    and transformative IT solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Value</h4>
                  <p className="mil-box-text">
                    We Value' encapsulates our dedication to integrity, respect,
                    and client satisfaction, placing core values at the heart of
                    every interaction and solution we offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Believe</h4>
                  <p className="mil-box-text">
                    Embracing a future of limitless possibilities, 'We Believe'
                    signifies our confidence in technology's transformative
                    power, driving innovation and progress for our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Say “We”</h4>
                  <p className="mil-box-text">
                    We Say "We" echoes our collaborative spirit, emphasizing
                    teamwork and shared responsibility, as we collectively
                    strive for excellence in every project and endeavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
      {/* contact end */}
    </Layouts>
  );
};
export default Solution2;
