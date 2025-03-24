import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Blog = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <Link href="publication" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blogth1.jpeg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      Revolutionizing Business through Digital Transformation
                      and Cloud Solutions
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      As businesses embrace digital transformation, cloud
                      solutions play a pivotal role in reshaping operational
                      paradigms. This blog delves into the symbiotic
                      relationship between digitalization and cloud computing
                      for progressive businesses.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication-2" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blogth2.jpeg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      Cybersecurity in the Digital Era: Safeguarding Software
                      Development Practices
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      In the realm of software development, cybersecurity is
                      paramount. This blog explores essential cybersecurity
                      practices tailored to secure the software development
                      lifecycle in the digital era.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication-3" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/blogth3.jpeg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      AI-Powered Innovation: Transforming Software Development
                      and Digital Experiences
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Artificial Intelligence (AI) is at the forefront of
                      transforming software development and digital experiences.
                      This blog explores the intersection of AI and software
                      development in the digital landscape.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  {/* <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li> */}
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About Amb ventures</h5>
                <p className="mil-mb-30">
                  Empowering Innovation, Driving Digital Excellence: Explore the
                  World of Amb ventures on Our Blog.
                </p>
                <Link href="team-1" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">
                      Abdulmohsen Bakhashawain
                    </h4>
                    <p className="mil-text-sm">Managing Director & CEO</p>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
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
              <div className="mil-divider mil-mb-60" />
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
              </div>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">
                Connect with Amb ventures
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
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;
