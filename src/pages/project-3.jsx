import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Project = () => {
  const data = {
    heading: (
      <span>
        SCMS Ai - Revolutionizing
        <br /> School Catering Management
      </span>
    ),
    slug: "scms_ai",
    challenge:
      "Managing food requirements for students in schools involves complex logistics. SCMS Ai aimed to simplify this process by offering a comprehensive School Catering Management System, including order management, student management, meal tracking, dashboards, and finance management.",
    our_solution:
      "We envisioned SCMS Ai as a holistic solution addressing the unique challenges of school catering. The system integrates functionalities for efficient order processing, student tracking, and financial management, ensuring schools have a centralized platform for their catering needs.",
    our_solution_list: [
      "Comprehensive Catering Management",
      "Student-Focused Functionality",
      "Optimized Resource Allocation",
      "Efficiency in Order Processes",
      "Improved Student Satisfaction",
      "Centralized Platform for Administration",
      "Financial Transparency",
      "Empowering Schools for Growth",
    ],
    the_solution:
      "SCMS Ai transformed school catering management with its intuitive interface and tailored features. The system streamlined order processes, enhanced student meal tracking, and provided administrators with insightful dashboards for effective decision-making.",
    the_solution_list: [
      "Mobile App for Parent-Student Interaction",
      "Biometric Meal Verification System",
      "Automated Financial Reporting",
      "Integration with School Management Software",
    ],
    the_impact:
      "Schools witnessed improved efficiency in catering operations, leading to enhanced student satisfaction and optimized financial management. SCMS Ai became an indispensable tool for schools aiming to provide nutritious meals while managing resources effectively.",
    the_impact_list: [
      " 25% Improvement in Meal Distribution Efficiency",
      "Enhanced Parental Engagement",
      "Financial Transparency and Accountability",
      "15% Increase in School Meal Program Participation",
    ],
    conclusion:
      "In conclusion, SCMS Ai has not only revolutionized school catering management but has also become an integral part of fostering healthy student well-being. With streamlined processes, enhanced efficiency, and improved transparency, it stands as a testament to the positive impact of innovative technology in educational environments.",
    client: "Rahal - Internal Project",
    service: "SaaS System Development",
    industry: "School Catering Management System",
    stack: "Angular, Node.js, Ionic, MongoDB",
    img_1: "img/projects/scmsai_1.jpg",
    img_2: "img/projects/scmsai_2.jpg",
    de: "SCMS Ai consolidated various aspects of catering management, from orders to finances, providing schools with a comprehensive solution.",
    cf: "The system prioritized student needs, ensuring accurate meal tracking and a seamless experience for both students and administrators.",
    dev: "SCMS Ai optimized resource allocation, enabling schools to deliver nutritious meals while maintaining financial transparency and sustainability.",
  };

  const getData = (key) => data?.[key];
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <Link href="/portfolio" className="mil-link link-left mil-mb-30">
              <i className="fas fa-arrow-left" />
              <span>All Cases</span>
            </Link>
            <h2 className="mil-uppercase">{getData("heading")}</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>
                <p className="mil-mb-10">Client</p>
                <h6 className="mil-mb-15">{getData("client")}</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Service</p>
                <h6 className="mil-mb-15">{getData("service")}</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Industry</p>
                <h6 className="mil-mb-15">{getData("industry")}</h6>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p className="mil-mb-10">Stack</p>
                <h6>{getData("stack")}</h6>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Overviews
              </span>
              <h3 className="mil-mb-30">Challenge</h3>
              <p className="mil-mb-60">{getData("challenge")}</p>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-60">{getData("our_solution")}</p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-dark mil-mb-15">
                    {getData("our_solution_list")
                      ?.map((item, i) => (
                        <li key={i}>
                          <img src="img/icons/sm/12.svg" alt="icon" />
                          <span> {`${item}`}</span>
                        </li>
                      ))
                      .splice(0, 4)}
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-dark mil-mb-15">
                    {getData("our_solution_list")
                      ?.map((item, i) => (
                        <li key={i}>
                          <img src="img/icons/sm/12.svg" alt="icon" />
                          <span> {`${item}`}</span>
                        </li>
                      ))
                      .splice(4)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* project */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">The Solution</h3>
              <p className="mil-mb-30">{getData("the_solution")}</p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_solution_list")?.[0]}</p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_solution_list")?.[1]} </p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_solution_list")?.[2]}</p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_solution_list")?.[3]}</p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src={getData("img_1")} alt="Project" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-60">
              <h3 className="mil-mb-30">The Impact</h3>
              <p className="mil-mb-30">{getData("the_impact")}</p>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_impact_list")?.[0]}</p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_impact_list")?.[1]}</p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_impact_list")?.[2]}</p>
              </div>
              <div className="mil-icon-box-head mil-long mil-mb-15">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <p className="mil-dark">{getData("the_impact_list")?.[3]}</p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src={getData("img_2")} alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* conclusion */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "30%" }} />
        <div className="container">
          <div className="row align-items-end mil-mb-90">
            <div className="col-xl-6">
              <h2 className="mil-mb-30">Conclusion</h2>
              <p>{getData("conclusion")}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">
                    Comprehensive Catering Management
                  </h4>
                  <p className="mil-box-text mil-mb-30">
                    <span>{getData("de")}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Student-Centric Approach</h4>
                  <p className="mil-box-text mil-mb-30">
                    <span>{getData("cf")}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/3.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Efficient Resource Utilization</h4>
                  <p className="mil-box-text mil-mb-30">
                    <span>{getData("dev")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* conclusion end */}
      <div className="container">
        <div className="mil-divider mil-mb-60" />
      </div>
      {/* pagination */}
      <div className="container mil-mb-120">
        <div className="mil-pagination mil-hidden-button">
          <Link href="project-2" className="mil-slider-nav">
            <div className="mil-slider-btn-prev mil-button-sm mil-blog-prev">
              <i className="fas fa-arrow-left" />
              <span className="mil-h6">Prev</span>
            </div>
          </Link>
          <Link href="portfolio" className="mil-button-all">
            <span>
              <i className="fas fa-list" />
            </span>
          </Link>
          <div className="mil-slider-nav">
            <Link href={"#"} className="mil-slider-btn-next mil-blog-next">
              <span className="mil-h6">Next</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* pagination end */}
    </Layouts>
  );
};
export default Project;
