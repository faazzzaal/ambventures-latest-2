import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";
import Service4Tabs from "../components/sliders/Service4Tabs";
const Service4Courses = dynamic(
  () => import("@/src/components/sliders/Service4Courses"),
  {
    ssr: false,
  }
);
const Service4 = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Service"} pageTitle={"Web Development"} />
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Expertise
            </span>
            <h2 className="mil-mb-30">
              Custom <span className="mil-accent">Web Solutions</span> For any
              Web Platform
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Versatile Web Development</h5>
                <p className="mil-mb-30">
                  Dive into a world of possibilities with our custom web app
                  solutions. Whether you prefer React, Angular, or other
                  trending web platforms, our adept developers ensure your
                  vision transforms into a seamless and responsive digital
                  experience.
                </p>
                {/* <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Java</li>
                  <li className="mil-text-sm mil-bold mil-dark">Kotlin</li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Cross-Platform Compatibility</h5>
                <p className="mil-mb-30">
                  Experience the benefits of cross-platform development. Our
                  expertise ensures your web application functions flawlessly on
                  various platforms, delivering a consistent user experience to
                  your audience.
                </p>
                {/* <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Swift</li>
                  <li className="mil-text-sm mil-bold mil-dark">Objective-C</li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Cutting-edge Technologies</h5>
                <p className="mil-mb-30">
                  Stay at the forefront of web development. Our team leverages
                  the latest technologies to build web applications that are not
                  only robust and scalable but also future-proof, giving you a
                  competitive edge in the digital landscape.
                </p>
                {/* <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">
                    React Native
                  </li>
                  <li className="mil-text-sm mil-bold mil-dark">Flutter</li>
                  <li className="mil-text-sm mil-bold mil-dark">Ionic</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}

      {/* <LatestProjectsSlider /> */}

      {/* left nav tabs */}
      <Service4Tabs />
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
              Website <br />
              Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/23.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">E-commerce Websites</h5>
                <p>
                  Boost your online presence with a customized e-commerce
                  website. We craft user-friendly interfaces and secure payment
                  gateways, ensuring a seamless shopping experience for your
                  customers.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20"> Portfolio & Blog Websites</h5>
                <p>
                  Showcase your work or express your ideas with a personalized
                  portfolio or blog website. We design websites that reflect
                  your style and effectively convey your message.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Business and Corporate Websites</h5>
                <p>
                  Establish a strong online presence for your business. Our web
                  development services cater to the unique needs of businesses,
                  creating professional and responsive corporate websites.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Real Estate Websites</h5>
                <p>
                  Simplify property management with a tailored real estate
                  website. From listings to transactions, our websites enhance
                  the efficiency of real estate operations.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Event and Booking Websites</h5>
                <p>
                  Streamline event management with a dedicated website. Enable
                  hassle-free bookings, registrations, and information
                  dissemination for your events.
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
                Next <span className="mil-accent">Gen Tech</span> For Webite
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
                <h6>Progressive Web Apps (PWAs)</h6>
                <span>
                  Embrace the future of web experiences with PWAs, delivering
                  enhanced performance and offline capabilities, offering users
                  an app-like journey.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/11.svg" alt="icon" />
                </div>
                <h6>Serverless Architecture</h6>
                <span>
                  Optimize scalability and minimize infrastructure costs by
                  embracing serverless architecture, providing a flexible and
                  cost-effective foundation for your website.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <h6>Single Page Applications (SPAs)</h6>
                <span>
                  {" "}
                  Elevate user engagement with SPAs that dynamically load
                  content, reducing page reloads and creating a seamless,
                  interactive web experience.
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <h6>Headless CMS for Websites</h6>
                <span>
                  Unleash content flexibility across platforms with a Headless
                  CMS, enabling centralized content management and seamless
                  delivery across diverse devices and channels.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
    </Layouts>
    // <Layouts>
    //   <PageBanner pageName={"Service"} pageTitle={"Cybersecurity"} />
    //   {/* about */}
    //   <section className="mil-p-120-90">
    //     <div
    //       className="mil-deco"
    //       style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
    //     />
    //     <div className="container">
    //       <div className="row justify-content-between align-items-center">
    //         <div className="col-xl-4">
    //           <div
    //             className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
    //             data-swiper-parallax-scale=".8"
    //           >
    //             <div className="mil-circle-bg" />
    //             <div className="mil-image-frame">
    //               <img src="img/faces/t4.png" alt="img" />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-7">
    //           <h2 className="mil-mb-30">
    //             Protect Your IT Environments With{" "}
    //             <span className="mil-accent">Powerful Cloud Security</span>{" "}
    //             Solutions and Always on Support
    //           </h2>
    //           <div className="mil-hori-box mil-mb-30">
    //             <div className="mil-mr-30">
    //               <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
    //                 <img src="img/icons/md/1.svg" alt="icon" />
    //               </div>
    //             </div>
    //             <p>
    //               Our{" "}
    //               <span className="mil-accent">certified cloud security</span>{" "}
    //               experts help protect your environments across hyperscale
    //               public and private clouds so you can run your business
    //               confidence.
    //             </p>
    //           </div>
    //           <a href="#." className="mil-button mil-border mil-mb-30">
    //             <span>Get in Touch</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* about end */}
    //   <div className="container">
    //     <div className="mil-divider" />
    //   </div>
    //   {/* ??? */}
    //   <section className="mil-p-120-90">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-7">
    //           <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
    //             Discover Our Company
    //           </span>
    //           <h2 className="mil-mb-30">
    //             Explore <span className="mil-accent">Cloud Security</span>{" "}
    //             Solutions
    //           </h2>
    //           <p className="mil-mb-90">
    //             The import ContactForm from "@/src/components/ContactForm";
    //             import Layouts from "@/src/layouts/Layouts"; constant evolution
    //             of threats and the race for more sophisticated tools to combat
    //             them means that security is changing rapidly.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>I</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Application Security</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>II</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Data Protection</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>III</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Network Security</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>IV</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Security Strategy</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>V</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Detection and Response</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-xl-4">
    //           <div className="mil-hover-card mil-box-center mil-mb-30">
    //             <div
    //               className="mil-deco mil-deco-accent"
    //               style={{ top: "-10%", right: "-10%" }}
    //             />
    //             <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //               <h3>VI</h3>
    //             </div>
    //             <h5 className="mil-mb-30">Elastic Engineering</h5>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* ??? end */}
    //   {/* ??? */}
    //   <section className="mil-deep-bg mil-p-120-90">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-7">
    //           <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
    //             Explore More Solutions
    //           </span>
    //           <h2 className="mil-mb-90">
    //             Boost Your <span className="mil-accent">Advantage</span>
    //           </h2>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-xl-3 mil-mb-30">
    //           <div
    //             className="mil-deco mil-deco-accent"
    //             style={{ top: "-10%", right: "-10%" }}
    //           />
    //           <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //             <h3>I</h3>
    //           </div>
    //           <h5 className="mil-mb-30">
    //             Cloud Native <br />
    //             Security Services
    //           </h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
    //             tempor incididunt ut labore et dolore magna aliqua.
    //           </p>
    //         </div>
    //         <div className="col-xl-3 mil-mb-30">
    //           <div
    //             className="mil-deco mil-deco-accent"
    //             style={{ top: "-10%", right: "-10%" }}
    //           />
    //           <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //             <h3>II</h3>
    //           </div>
    //           <h5 className="mil-mb-30">
    //             Multi <br />
    //             Cloud Security
    //           </h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
    //             tempor incididunt ut labore et dolore magna aliqua.
    //           </p>
    //         </div>
    //         <div className="col-xl-3 mil-mb-30">
    //           <div
    //             className="mil-deco mil-deco-accent"
    //             style={{ top: "-10%", right: "-10%" }}
    //           />
    //           <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //             <h3>III</h3>
    //           </div>
    //           <h5 className="mil-mb-30">
    //             On Site Security <br />
    //             and Compliance
    //           </h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
    //             tempor incididunt ut labore et dolore magna aliqua.
    //           </p>
    //         </div>
    //         <div className="col-xl-3 mil-mb-30">
    //           <div
    //             className="mil-deco mil-deco-accent"
    //             style={{ top: "-10%", right: "-10%" }}
    //           />
    //           <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
    //             <h3>IV</h3>
    //           </div>
    //           <h5 className="mil-mb-30">
    //             Consectetur <br />
    //             adipiscing elit
    //           </h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
    //             tempor incididunt ut labore et dolore magna aliqua.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* ??? end */}
    //   {/* ??? */}
    //   <section className="mil-gradient-bg mil-p-120-90">
    //     <div
    //       className="mil-deco mil-deco-accent"
    //       style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
    //     />
    //     <div className="container">
    //       <div className="row justify-content-between align-items-center">
    //         <div className="col-xl-4">
    //           <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
    //             Explore More Solutions
    //           </span>
    //           <h2 className="mil-light mil-mb-90">
    //             Do You Know what Your{" "}
    //             <span className="mil-accent">Cybersecurity</span> Risk Score Is?
    //           </h2>
    //         </div>
    //         <div className="col-xl-7 mil-mb-30">
    //           <p className="mil-light-soft mil-mb-30">
    //             By answering these simple questions about your cybersecurity
    //             technology, processes, and people, you'll receive a
    //             cybersecurity risk score against our baseline that can help you
    //             identify common security gaps in your environment that you may
    //             not be aware of.
    //           </p>
    //           <a href="#." className="mil-button mil-border mil-light">
    //             <span>Start Now</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/* ??? end */}
    //   {/* courses */}
    //   <Service4Courses />
    //   {/* courses end */}
    //   {/* contact */}
    //   <section className="mil-contact mil-gradient-bg mil-p-120-0">
    //     <div
    //       className="mil-deco mil-deco-accent"
    //       style={{ top: 0, right: "10%" }}
    //     />
    //     <div className="container">
    //       <h2 className="mil-light mil-mb-90">
    //         Contact <span className="mil-accent">Us</span>
    //       </h2>
    //       <form>
    //         <div className="row">
    //           <div className="col-lg-6">
    //             <div className="mil-input-frame mil-mb-30">
    //               <label>
    //                 <span className="mil-light">Name</span>
    //                 <span className="mil-accent">Required</span>
    //               </label>
    //               <input type="text" placeholder="Enter Your Name Here" />
    //             </div>
    //             <div className="mil-input-frame mil-mb-30">
    //               <label>
    //                 <span className="mil-light">Email Adress</span>
    //                 <span className="mil-accent">Required</span>
    //               </label>
    //               <input type="email" id="email" placeholder="Your Email" />
    //             </div>
    //             <div className="mil-input-frame mil-mb-60">
    //               <label>
    //                 <span className="mil-light">Phone</span>
    //                 <span className="mil-light-soft">Optional</span>
    //               </label>
    //               <input type="number" placeholder="Your Phone" />
    //             </div>
    //             <div className="mil-attach-frame mil-mb-60">
    //               <i className="fas fa-paperclip" />
    //               <label className="mil-custom-file-input">
    //                 <span>Attach your file</span>
    //                 <input type="file" id="mil-file-input" />
    //               </label>
    //               <p className="mil-text-sm mil-light-soft">up to 20MB</p>
    //             </div>
    //           </div>
    //           <div className="col-lg-6">
    //             <div className="mil-input-frame mil-mb-30">
    //               <label>
    //                 <span className="mil-light">Email Adress</span>
    //                 <span className="mil-accent">Required</span>
    //               </label>
    //               <textarea placeholder="Your Message" defaultValue={""} />
    //             </div>
    //             <p className="mil-text-sm mil-light-soft mil-mb-15">
    //               We will process your personal information in accordance with
    //               our Privacy Policy.
    //             </p>
    //             <div className="mil-checbox-frame mil-mb-60">
    //               <input
    //                 className="mil-checkbox"
    //                 id="checkbox-1"
    //                 type="checkbox"
    //                 defaultValue="value"
    //               />
    //               <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
    //                 I would like to be contacted with news and updates about
    //                 your{" "}
    //                 <a href="#." className="mil-accent">
    //                   events and services
    //                 </a>
    //               </label>
    //             </div>
    //           </div>
    //           <div className="col-12">
    //             <button className="mil-button mil-accent-bg mil-fw">
    //               <span>Send Message Now</span>
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </section>
    //   {/* contact end */}
    // </Layouts>
  );
};
export default Service4;
