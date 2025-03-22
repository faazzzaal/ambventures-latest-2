import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Contact = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">01.</span> Tell Us About Yourself
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label>
                      <input type="text" placeholder="Your First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Last Name</span>
                      </label>
                      <input type="text" placeholder="Your Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                      </label>
                      <input type="email" placeholder="example@mydomain.com" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label>
                      <input type="text" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label>
                      <input type="text" placeholder="Your role" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">02.</span> What Can We Help You
                  With?
                </h4>
                <div className="row">
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Product Design</span>
                      </label>
                      <input type="text" placeholder="Please Enter" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">03.</span> Tell Us About Your
                  Project
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-attach-frame mil-dark mil-mb-30">
                      <i className="fas fa-paperclip" />
                      <label className="mil-custom-file-input">
                        <span>Attach your file</span>
                        <input type="file" id="mil-file-input" />
                      </label>
                      <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" placeholder={"USD"} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="contact" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              {/* <div className="mil-divider mil-mb-60" /> */}
              {/* <Link href="contact" className="mil-link mil-link-sm mil-mb-15">
                <span>Legality Guide</span>
                <i className="fas fa-arrow-right" />
              </Link>
              <br />
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Security Center</span>
                <i className="fas fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14842.065529299145!2d39.1432105!3d21.5657576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dabcbb39b1fb%3A0x73444755227de21f!2zVmlzaW9uIEplZGRhaCAtINio2LHYrCDZgdmK2KzZhiDYrNiv2Kk!5e0!3m2!1sen!2sin!4v1703680368327!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container" />
      </div>
      {/* map end */}
      {/* contact info */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">Saudi Arabia</h4>
                <h5 className="mil-list-title mil-mb-15">Jeddah</h5>
                <p className="mil-mb-30">
                  #1106. 11th floor, Kayyal St., Prince Sultan Road, Jeddah,
                  Saudi Arabia – P.O. 704 Jed 21421
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+966-</span>556620046
                </h6>
                <h6>
                  <span className="mil-accent">ask@rahal</span>.mynaghi.com
                </h6>
              </div>
            </div>
            {/* <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">Germany</h4>
                <h5 className="mil-list-title mil-mb-15">Berlin</h5>
                <p className="mil-mb-30">
                  501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat
                  - 380060
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">germany</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">France</h4>
                <h5 className="mil-list-title mil-mb-15">Paris</h5>
                <p className="mil-mb-30">
                  397 Bedford Highway, Suite 323 Halifax NS B3M 2L3 Science City
                  Road
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">france</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
