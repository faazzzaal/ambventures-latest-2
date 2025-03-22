import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Team2 = (posts) => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <div className="row justify-content-between">
              <div className="col-lg-6 mil-adaptive-center">
                <Link href="team" className="mil-link link-left mil-mb-30">
                  <i className="fas fa-arrow-left" />
                  <span>Go Back</span>
                </Link>
                <h2 className="mil-uppercase mil-mb-30">Abdul Hameed Khan</h2>
                <p>Tech Lead </p>
                <p>Digital Transformation & Tech Operations</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src={"img/faces/2.jpg"} alt={"Abdul Hameed Khan"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* team member */}
      <section className="mil-team mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h3 className="mil-mb-30">Biography</h3>
              <p className="mil-mb-60">
                Abdul Hameed Khan, a graduate from one of Asia's premier B
                schools, holds a master's degree in tech management. With a
                trailblazing career spanning over 7 years, he has honed his
                expertise in tech, venture building, and business operations.
                Having contributed to the success of startups and tech giants in
                the Silicon Valley of Asia, Abdul is recognized for his
                pioneering work in digitally transforming businesses throughout
                GCC and Asia.
              </p>
              <div className="mil-divider mil-mb-60" />
              {/* <ul className="mil-timeline">
                <li>
                  <h5 className="mil-mb-5">Capital Agency</h5>
                  <p className="mil-text-sm">2014-1017</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Under Inc</h5>
                  <p className="mil-text-sm">2017-1019</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">ITSulu Group</h5>
                  <p className="mil-text-sm">2019-Today</p>
                </li>
              </ul> */}
              <div className="mil-mb-60">
                <div>
                  <div>
                    A tech visionary and graduate of one of Asia's finest
                    business schools, brings over 7 years of industry experience
                    to our team. His journey involves contributing to the
                    success stories of well-known companies such as Zomato,
                    MyCaptain, Hillrom, and Talabat. Abdul has been a driving
                    force behind the digital transformation of startups and
                    businesses across GCC and Asia.
                  </div>
                  <br />
                  <div>
                    His expertise extends beyond conventional roles, as he has
                    served on the boards and fostered strategic partnerships for
                    various startups in the region. Abdul's commitment to
                    venture building and tech innovation has left an indelible
                    mark on the landscape of the startup ecosystem in both GCC
                    and Asia, shaping the future of businesses through digital
                    advancements.
                  </div>
                  <br />
                </div>
              </div>
              {/* <div className="mil-divider mil-mb-60" />
              <div className="row">
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Wearable Dev</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Design Analytics</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Content Strategy</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
              </div> */}
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-30">Skills</h3>
              <div className="mil-mb-60">
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "Tech Management",
                    "Venture Building",
                    "Digital Transformation",
                    "Business Operations",
                    "Strategic Partnerships",
                    "Board Advisory",
                    "Start-up Ecosystem Expertise",
                    "Market Analysis",
                  ].map((e) => (
                    <li style={{ flex: "1 0 21%", margin: "15px" }}>
                      <b className="mil-dark">{e}</b>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">Social</h3>
              <ul className="mil-social-links mil-mb-30">
                {/* <li>
                  <a href="#.">Facebook</a>
                </li> */}
                <li>
                  <a href={"https://www.instagram.com/ahkzain/"}>Instagram</a>
                </li>
                <li>
                  <a href={"https://www.linkedin.com/in/hameedkhan1010/"}>
                    LinkedIn
                  </a>
                </li>
                {/* <li>
                  <a href="#.">Twitter</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-3 col-lg-3 col-lg-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30">
                  I firmly believe that the pivotal role of technology is{" "}
                  <span className="mil-accent">indispensable in realizing</span>{" "}
                  the vision of venture building.
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Abdul Hameed Khan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default Team2;
