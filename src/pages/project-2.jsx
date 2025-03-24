import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Project = () => {
  const data = {
    heading: (
      <span>
        Wayrem Ai - Transforming Logistics and
        <br /> E-commerce Management
      </span>
    ),
    slug: "wayrem_ai",
    challenge:
      "Logistics businesses, both B2B and B2C, grapple with the need for an all-encompassing software solution. Wayrem Ai aimed to address this challenge by providing a complete logistics and e-commerce system with extensive tools for managing the entire business.",
    our_solution:
      "We conceptualized Wayrem Ai as a one-stop software solution, offering comprehensive modules for both back-end business operations and front-end customer management. The goal was to streamline logistics processes and enhance the customer experience.",
    our_solution_list: [
      "Unified Logistics Solution",
      "End-to-End Business Modules",
      "Scalability and Adaptability",
      "Customer-Centric Design",
      "Efficiency in Operations",
      "Flexibility in Business Processes",
      "Adherence to Industry Standards",
      "Technology for Growth",
    ],
    the_solution:
      "Wayrem Ai seamlessly integrated logistics and e-commerce functionalities, providing businesses with a unified platform for order processing, inventory management, and customer interactions. Its user-friendly design ensured a smooth experience for both logistics professionals and end customers.",
    the_solution_list: [
      "Real-Time Route Optimization",
      "AI-Powered Demand Forecasting",
      "Integrated Customer Feedback System",
      "Blockchain-Powered Security Features",
    ],
    the_impact:
      "Businesses experienced increased operational efficiency, reduced errors, and improved customer satisfaction. Wayrem Ai's ability to adapt to evolving logistics demands positioned businesses for growth in the ever-expanding e-commerce landscape.",
    the_impact_list: [
      "20% Increase in Delivery Speed",
      "15% Reduction in Inventory Costs",
      "Enhanced Customer Loyalty Programs",
      "Increased Data Security Measures",
    ],
    conclusion:
      "In summary, Wayrem Ai has significantly transformed logistics and e-commerce operations, proving to be the driving force behind increased efficiency and customer satisfaction. Its real-time optimization, advanced forecasting, and security features showcase the transformative power of technology in shaping the future of the logistics and e-commerce sectors.",
    client: "Amb ventures - Internal Project",
    service: "SaaS System Development",
    industry: "Logistics, ERP, Supple Chain, E commerce",
    stack: "React, ReactNative, MongoDB, Node.js",
    img_1: "img/projects/wayrem_1.jpg",
    img_2: "img/projects/wayrem_2.jpg",
    de: "Wayrem Ai became the go-to solution for businesses, offering tools that cover every aspect of logistics and e-commerce operations.",
    cf: "The customer modules provided a seamless experience, contributing to increased satisfaction and loyalty.",
    dev: "Businesses found in Wayrem Ai a scalable solution that evolved with their needs, accommodating the dynamic nature of the logistics and e-commerce sectors.",
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
                  <h4 className="mil-mb-30">End-to-End Logistics Management</h4>
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
                  <h4 className="mil-mb-30">Enhanced Customer Experience</h4>
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
                  <h4 className="mil-mb-30">Scalability</h4>
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
          <Link href="project-1" className="mil-slider-nav">
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
            <Link
              href="project-3"
              className="mil-slider-btn-next mil-blog-next"
            >
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
