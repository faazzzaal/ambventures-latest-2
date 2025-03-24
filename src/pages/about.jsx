import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import PartnersSection from "../components/sections/Partners";
const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"Empowering Excellence"} />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                Your gateway to a world where expertise meets innovation.{" "}
                <span className="mil-accent">While you're here</span>, talk to
                an expert and let's shape your digital success story together.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <a
                  href="#."
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/photo/21.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Firm Overview
              </span>
              <h2 className="mil-mb-50">
                We Specialize in <br />
                <span className="mil-accent">Transforming Your Idea</span> or
                Business in The Current
                <br /> Digital Era.
              </h2>
              <p className="mil-mb-50">
                In a rapidly evolving digital landscape, Amb ventures stands as
                your strategic partner, specializing in translating your ideas
                and business objectives into powerful, tech-driven solutions.
                Harnessing innovation and expertise, we propel your journey to
                success in the dynamic realm of the digital era.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Tailored Tech Solutions.</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Strategic Digital Transformation.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Innovative Problem-Solving.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Agile Development Methodology.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img src="img/faces/1.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">
                        Abdulmohsen Bakhashawain
                      </h4>
                      <p className="mil-text-sm">
                        Managing Director &amp; CEO{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                10<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years of Industry Expertise</h6>
              <h2 className="mil-mb-60">
                We Run All Kinds of IT Services That Vow Your Success
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Accelerate <span className="mil-accent">Innovation</span> with
                world class tech teams We’ll match you to an entire{" "}
                <span className="mil-accent">Remote Technology</span>
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">5+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">25+</span>&nbsp; App
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">50+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* partners */}
      {/* <div className="mil-partners mil-p-120-90">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div> */}
      <PartnersSection />
      {/* partners end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/photo/22.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <p className="mil-mb-50">
                We’re on a mission to bring together the personal service of
                local IT providers with the power of a national network. We
                believe that’s simpler than it sounds. Our offices offer
                high-touch IT services that clients love from highly experienced
                local team members.
              </p>
              <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Amb ventures brings unparalleled expertise to the table,
                  ensuring a competitive edge. Our seasoned professionals
                  deliver precision in IT solutions, maximizing success for your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Elevate your projects with Amb ventures's commitment to
                  quality management. Our stringent standards ensure excellence,
                  enhancing your digital presence and leaving a lasting
                  impression.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Experience adaptability with Amb ventures's utmost
                  flexibility. Our tailored solutions cater to evolving
                  requirements, ensuring success in the dynamic digital
                  landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Stay ahead with Amb ventures's agile approach. Our swift
                  response to industry shifts and proactive solutions propel
                  your business forward in the fast-paced technological
                  environment.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Fuel growth with Amb ventures's commitment to innovation. From
                  cutting-edge technologies to forward-thinking strategies, we
                  infuse creativity into every solution, driving your business
                  towards unparalleled success.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For Enterprise
          </span>
          <h2 className="mil-mb-120">
            We Live by <span className="mil-accent">Powerful</span> Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are</h4>
                  <p className="mil-box-text">
                    At Amb ventures, 'We Are' signifies unity, where every team
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
      {/* features end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default About;
