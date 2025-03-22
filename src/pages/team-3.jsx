import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Team3 = (posts) => {
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
                <h2 className="mil-uppercase mil-mb-30">Sandeep Yadav</h2>
                <p>Head Of Engineering & Development</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src={"img/faces/7.jpg"} alt={"Abdul Hameed Khan"} />
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
                Sandeep Yadav, a seasoned professional with a B.Tech in
                Electronics and Communications, boasts a remarkable career
                spanning over 8 years in the dynamic IT industry. His expertise
                shines through a proven track record of successfully working
                with various ERPs, adeptly designing, and seamlessly
                implementing cutting-edge solutions.
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
                    In his role as the Head of Engineering and Development at
                    our IT solutions company, Sandeep Yadav brings a wealth of
                    experience and technical acumen to the table. Having earned
                    a B.Tech in Electronics and Communications, Sandeep has
                    dedicated the last 8 years to making significant
                    contributions to the IT industry.
                  </div>
                  <br />
                  <div>
                    His journey is marked by a series of achievements,
                    particularly in the realm of Enterprise Resource Planning
                    (ERP). Sandeep has not only showcased a profound
                    understanding of ERPs but has also played a pivotal role in
                    their successful implementation. His strategic insights and
                    hands-on approach to system design have consistently
                    delivered robust, scalable, and efficient solutions.
                  </div>
                  <br />
                  <div>
                    Sandeep's leadership style is characterized by a
                    collaborative spirit, fostering cross-functional teamwork to
                    achieve project milestones. Whether it's steering software
                    development projects or implementing innovative
                    technologies, he is known for his meticulous planning and
                    problem-solving skills.
                  </div>
                  <br />
                  <div>
                    As the driving force behind our engineering and development
                    teams, Sandeep Yadav continues to lead us towards
                    excellence, ensuring that our IT solutions remain at the
                    forefront of industry standards.
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
                  l
                >
                  {[
                    "ERP Implementation",
                    "System Design",
                    "Software Development",
                    "Project Management",
                    "Team Leadership",
                    "Strategic Planning",
                    "Cross-functional Collaboration",
                    "Problem Solving",
                  ].map((e) => (
                    <li style={{ flex: "1 0 21%", margin: "15px" }}>
                      <b className="mil-dark">{e}</b>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">Social</h3>
              <ul className="mil-social-links mil-mb-30">
                <li>
                  <a href="#.">Facebook</a>
                </li>
                <li>
                  <a href={"https://www.instagram.com/ahkzain/"}>Instagram</a>
                </li>
                <li>
                  <a href={"https://www.linkedin.com/in/hameedkhan1010/"}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#.">Twitter</a>
                </li>
              </ul> */}
            </div>
            <div className="col-md-3 col-lg-3 col-lg-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30">
                  Elevating my leadership with{" "}
                  <span className="mil-accent">
                    innovation and transformative
                  </span>{" "}
                  vision.
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Sandeep Yadav</p>
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
export default Team3;
