const DefaultFooter = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="/img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <img
                src="/img/logo/logo-light.png"
                alt="logo"
                className="mil-logo "
                // style={{ width: 300, marginLeft: "-50px" }}
              />
              <p className="mil-light-soft mil-mb-30">
                Elevate your enterprise with Amb ventures – where innovation
                meets excellence in IT solutions. Transforming challenges into
                opportunities for a digital future.
              </p>
            </div>
            <div className="col-xl-7 mil-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 mil-mb-30">
                  <h3
                    className="mil-light mil-up-font mil-mb-30"
                    style={{ fontSize: "30px" }}
                  >
                    We manage your IT, so you can manage your business.
                    {/* We manage your IT, so you can manage your business. <span className="mil-accent">ITSulu</span> <br />
                    Experience */}
                  </h3>
                  <p className="mil-light-soft">
                    Take charge of your business continuity
                    <br /> with innovative IT solutions.
                  </p>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  <form>
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="mil-button mil-accent-bg mil-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-divider mil-light" />
        <div className="mil-footer-links">
          <ul className="mil-social mil-light">
            <li className="mil-adapt-links">
              <a
                href="https://www.instagram.com/Amb venturesvb?igsh=MWZxOGNtcGNha3Voaw=="
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://www.instagram.com/Amb venturesvb?igsh=MWZxOGNtcGNha3Voaw=="
                target="_blank"
              >
                IG
              </a>
            </li>
            <li className="mil-adapt-links">
              <a
                href="https://www.linkedin.com/company/Amb venturestech"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/company/Amb venturestech"
                target="_blank"
              >
                IN
              </a>
            </li>
          </ul>
          <ul className="mil-additional-links mil-light">
            <li>
              <a href="#.">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#.">Privacy Policy</a>
            </li>
            <li>
              <a href="#.">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">
            <span>&copy;</span>Amb ventures 2023.
          </p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
