import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-2 mil-deep-bg">
        <img
          src="img/blog/blogth1.jpeg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="Publication cover"
        />
        <div className="mil-overlay" />
      </div>
      {/* banner end */}
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              {/* <span className="mil-suptitle mil-accent mil-mb-30">
                Website Speed
              </span> */}
              <h3 className="mil-up-font mil-mb-30">
                Revolutionizing Business through Digital Transformation and
                Cloud Solutions
              </h3>
              <ul className="mil-dot-list mil-post-info mil-text-sm mil-mb-60">
                <li className="mil-post-author">
                  <img src="img/faces/2.jpg" alt="Author" />
                  <span>Abdul Hameed Khan</span>
                </li>
                <li>29 Oct. 2024</li>
                <li>5 min read</li>
              </ul>
              <div className="mil-divider mil-mb-60" />
              <p className="mil-mb-30">
                As businesses embrace digital transformation, cloud solutions
                play a pivotal role in reshaping operational paradigms. This
                blog delves into the symbiotic relationship between
                digitalization and cloud computing for progressive businesses.
              </p>
              {/* <p className="mil-mb-60">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p> */}
              <h3 className="mil-mb-50">The Latest Technology</h3>
              <p className="mil-mb-30">
                <b>Strategic Digitalization with Cloud Adoption: </b>Explore how
                businesses can strategically digitalize their operations by
                adopting cloud solutions, leading to increased agility,
                efficiency, and scalability.
              </p>
              <p className="mil-mb-30">
                <b>Accelerating Software Development in the Cloud:</b> Discuss
                how cloud platforms facilitate faster and more collaborative
                software development processes, enabling businesses to stay
                ahead in the competitive digital landscape.
              </p>
              {/* <blockquote cite="google.com" className="mil-mb-60">
                <p className="mil-text-lg mil-mb-20">
                  Donec tincidunt, turpis sed placerat placerat, est felis
                  bibendum elit, a feugiat dui arcu non nisl. Aliquam
                  pellentesque, tortor vitae faucibus tincidunt, purus odio
                  fermentum ipsum, vel aliquet nisi dui vitae risus.
                </p>
                <span className="mil-h4 mil-font-3 mil-accent">
                  - &nbsp;John Doe
                </span>
              </blockquote> */}
              <p className="mil-mb-30">
                <b>Enhancing Data Security in the Digital Age:</b> Highlight the
                advanced security measures provided by cloud solutions,
                safeguarding sensitive data and ensuring compliance with digital
                security standards.
              </p>
              <p className="mil-mb-30">
                <b> Agile Workflows and Remote Collaboration:</b> Showcase how
                cloud-based tools enhance agile workflows, promote remote
                collaboration, and foster innovation in software development
                teams.
              </p>
              <p className="mil-mb-30">
                <b>Realizing Cost-Efficiencies through Cloud Resources:</b>{" "}
                Detail how businesses can optimize costs by utilizing cloud
                resources effectively, eliminating the need for extensive
                physical infrastructure.
              </p>
              <div className="row mil-mb-30">
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/blog2.jpg"
                    alt="blog"
                    className="mil-post-image"
                  />
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <img
                    src="img/blog/blog1.jpg"
                    alt="blog"
                    className="mil-post-image"
                  />
                </div>
              </div>
              <h3 className="mil-mb-50">Conclusion</h3>
              <p className="mil-mb-60">
                Encourage businesses to embark on their digital transformation
                journey with cloud solutions, emphasizing the seamless
                integration of software development processes.
              </p>
              {/* <ul className="mil-tags mil-mb-60">
                <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
                <li>
                  <a href="#.">Business</a>
                </li>
                <li>
                  <a href="#.">Design</a>
                </li>
                <li>
                  <a href="#.">Learning</a>
                </li>
              </ul> */}
              <div className="mil-divider mil-mb-60" />
              {/* <h5 className="mil-mb-30">Was this article helpful?</h5>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-15"
              >
                <span>Yes, it was fine!</span>
              </a>
              <a
                href="#."
                className="mil-button mil-border mil-button-sm mil-gray-border mil-mb-60"
              >
                <span>No, or there was something off</span>
              </a>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">
                Comments - <span className="mil-accent">02</span>
              </h3>
              <ul className="mil-comments-frame">
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/1.jpg" alt="user avatar" />
                      <div>
                        <h5>Ponnappa Priya</h5>
                        <p className="mil-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim minus rerum officiis sit quos non, nulla alias labore
                    sapiente quasi ut exercitationem aperiam beatae magni sunt
                    corporis ducimus? Ipsum, asperiores.
                  </p>
                  <ul className="mil-sub-comments">
                    <li className="mil-comment">
                      <div className="mil-comment-top-panel">
                        <div className="mil-left">
                          <img src="img/faces/2.jpg" alt="user avatar" />
                          <div>
                            <h5>Tamzyn French</h5>
                            <p className="mil-text-sm">September 23, 2020</p>
                          </div>
                        </div>
                        <a
                          href="#reply"
                          className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                        >
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className="mil-comment-text">
                        We realised we really wanted to catch a glimpse of what
                        went on behind the scenes of the companies we looked up
                        to.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="mil-comment">
                  <div className="mil-comment-top-panel">
                    <div className="mil-left">
                      <img src="img/faces/3.jpg" alt="user avatar" />
                      <div>
                        <h5>Paul Freeman</h5>
                        <p className="mil-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="mil-button mil-border mil-button-xs mil-gray-border mil-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="mil-comment-text">
                    Dolor sit amet, consectetur adipisicing elit. Veritatis
                    minus at aliquid dolorem quis, alias impedit eveniet, omnis
                    quisquam eaque, maxime aliquam repudiandae laborum mollitia
                    iure vel, ab illum voluptatem. Possimus eaque magnam facere
                    voluptatum ipsam optio, porro qui veritatis nostrum itaque,
                    tempora, vitae quam aliquid voluptate amet! Pariatur libero
                    blanditiis nesciunt quibusdam itaque voluptates iure tempore
                    facilis dolorem aut.
                  </p>
                </li>
              </ul>
              <div className="mil-divider mil-mb-60" id="reply" />
              <h3 className="mil-mb-60">Leave a Reply</h3> */}
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Name</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Message</span>
                        <span className="mil-accent">Required</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-60">
                      <label className="mil-h6">
                        <span>Website</span>
                        <span className="mil-dark-soft">Optional</span>
                      </label>
                      <input type="text" placeholder="mydomain.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mil-checbox-frame mil-dark-input mil-mb-60">
                      <input
                        className="mil-checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        defaultValue="value"
                      />
                      <label htmlFor="checkbox-1" className="mil-text-sm">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button className="mil-button mil-border mil-fw">
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About Rahal</h5>
                <p className="mil-mb-30">
                  Empowering Innovation, Driving Digital Excellence: Explore the
                  World of Rahal Tech on Our Blog.
                </p>
                <Link href="team-1" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">
                      Abdulmohsen Bakhashawain
                    </h4>
                    <p className="mil-text-sm">Managing Director &amp; CEO</p>
                  </div>
                </Link>
              </div>
              {/* <div className="mil-divider mil-mb-60" />
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form> */}
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/blogth1.jpeg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Revolutionizing Business through Digital Transformation
                      and Cloud Solutions
                    </h6>
                  </div>
                </Link>
                <Link href="publication-2" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/blogth2.jpeg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Cybersecurity in the Digital Era: Safeguarding Software
                      Development Practices
                    </h6>
                  </div>
                </Link>
                <Link href="publication-3" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/blogth3.jpeg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>
                      AI-Powered Innovation: Transforming Software Development
                      and Digital Experiences
                    </h6>
                  </div>
                </Link>
                {/* <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/3.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Positioning Your Self As a Pro Consultant</h6>
                  </div>
                </Link> */}
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Management</a>
                  </li>
                  <li>
                    <a href="#.">Software</a>
                  </li>
                </ul>
              </div>
              {/* <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">General</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Learning</a>
                  </li>
                </ul>
              </div> */}
              {/* <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div> */}
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">
                Connect with Rahal Tech
              </h5>
              <p className="mil-mb-30">
                Your Gateway to Tailored IT Solutions and Unparalleled Technical
                Expertise.
              </p>
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Send</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Publication;
