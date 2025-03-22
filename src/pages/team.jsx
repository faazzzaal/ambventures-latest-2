import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Team = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Team"} pageTitle={"Leadership Team"} />
      {/* team */}
      <section className="mil-team mil-p-120-60">
        <div className="container">
          <h3 className="mil-text-center mil-mb-120">
            One of many ways that we aim to keep providing customers with the
            best possible service is our continued investment in the education
            and growth of our people. and continually train and keep them
            updated in the latest technologies so we can help you win and grow
            your business.{" "}
            <span className="mil-accent">
              We only hire the most highly-skilled professionals, <br />
            </span>{" "}
            and continually train and keep them updated in the latest
            technologies so we can help you win and grow your business.
          </h3>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-sm-6 col-lg-4">
              <Link href="team-1" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img
                    src="img/faces/1.jpg"
                    alt="Team member"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Abdulmohsen Bakhashawain</h4>
                <p>Managing Director & CEO</p>
              </Link>
            </div>
            {/* <div className="col-sm-6 col-lg-4">
              <Link href="team-2" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img
                    src="img/faces/2.jpg"
                    alt="Team member"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Abdul Hameed Khan</h4>
                <p>Tech Lead </p>
                <p>Digital Transformation & Tech Operations</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-3" className="mil-team-card mil-mb-60 mil-mb-30">
                <div className="mil-image-frame mil-mb-30">
                  <img
                    src="img/faces/7.jpg"
                    alt="Team member"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Sandeep Yadav</h4>
                <p>Head Of Engineering & Development</p>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      {/* team end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* icon boxes */}
      <section className="mil-icon-boxes mil-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between mil-mb-90">
            <div
              className="col-xl-6"
              style={{ textAlign: "center", width: "100%" }}
            >
              <h2>
                Values that <span className="mil-accent">Lead Us</span>
              </h2>
            </div>
            {/* <div className="col-xl-5">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">01.</span>&nbsp; Productivity
                </h5>
                <p>
                  Driving excellence through focused efforts, turning ideas into
                  impactful results.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">02.</span>&nbsp; Transparency
                </h5>
                <p>
                  Fostering trust and collaboration through open communication
                  and clarity in all endeavors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">03.</span>&nbsp; Personality
                </h5>
                <p>
                  Celebrating diversity and individual strengths, making our
                  team a vibrant and inclusive community.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">04.</span>&nbsp; Volition
                </h5>
                <p>
                  Embracing challenges with determination and enthusiasm,
                  fueling our collective drive towards success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* icon boxes end */}
      {/* call to action */}
      <section className="call-to-action mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "15%" }}
        />
        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
              <img src="img/icons/md/6l.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Leadership Team</p>
            <h2 className="mil-light mil-mb-30">
              Let’s <span className="mil-accent">Open the World</span> of IT to
              You
            </h2>
            <p className="mil-light-soft mil-mb-60">
              Celebrating diversity and individual strengths, making our team a{" "}
              <br /> vibrant and inclusive community.
            </p>
            <a href="#." className="mil-button mil-border mil-light">
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </Layouts>
  );
};
export default Team;
