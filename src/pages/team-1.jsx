import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Team1 = (posts) => {
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
                <h2 className="mil-uppercase mil-mb-30">
                  Abdulmohsen Bakhashawain
                </h2>
                <p>Managing Director & CEO</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img
                  src={"img/faces/t1.png"}
                  alt={"Abdulmohsen Bakhashawain"}
                />
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
                {
                  "Meet Abdulmohsen Bakhashwain, the empathetic CEO and Managing Director of Amb ventures IT Solutions, dedicated to leading Saudi Arabia's premier food service company with a vision grounded in compassion."
                }
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
                    The visionary CEO and Founder of Amb ventures Venture
                    Builders, brings over a decade of experience in the
                    fast-moving consumer goods industry. His leadership
                    philosophy centers around aligning business interests with
                    compassion, societal benefits, and the broader vision of his
                    country. Abdulmohsen's journey is marked by successfully
                    incubating and accelerating brands, providing a one-stop
                    solution for a diverse range of services.
                  </div>
                  <br />
                  <div>
                    With a keen eye for opportunities, Abdulmohsen has navigated
                    the complexities of the food and beverage industry,
                    introducing innovative solutions like Cul.in, a
                    revolutionary cloud kitchen challenging traditional models.
                    His commitment to sustainability and community growth is
                    evident in Amb ventures's core slogan, "Serving Happiness."
                    Abdulmohsen's strategic approach involves seamlessly
                    integrating technology, innovation, and industry expertise
                    to create effective food value chain solutions.
                  </div>
                  <br />
                  <div>
                    Beyond business, Abdulmohsen is a dedicated philanthropist,
                    exemplified by Amb ventures Venture Builder's initiatives
                    like Cul.in, aimed at reshaping the restaurant sector and
                    giving back to the community. His skills span various
                    domains, from marketing and supply chain management to
                    operations optimization and strategic leadership, making
                    Abdulmohsen a dynamic force in the ever-evolving landscape
                    of the food and beverage industry.
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
                    "Strategic Leadership",
                    "Venture Building",
                    "Food and Beverage Industry Expertise",
                    "Innovation and Technology Integration",
                    "Marketing and Advertisement",
                    "Supply Chain Management",
                    "Operations Optimization",
                    "Philanthropy",
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
                  <a href={"https://www.instagram.com/itsabdulmohsenb/"}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://www.linkedin.com/in/abdulmohsen-bakhashwain-16a8a126/?originalSubdomain=sa"
                    }
                  >
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
                  In the realm of venture building, I believe in blending{" "}
                  <span className="mil-accent">innovation with compassion</span>{" "}
                  , creating not just businesses but experiences that resonate
                  with hearts and palates alike.
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Abdulmohsen Bakhashawain</p>
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
export default Team1;
