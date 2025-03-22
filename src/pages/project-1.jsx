import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { useRouter } from "next/router";
const Project = () => {
  const router = useRouter();
  const { project } = router.query;
  const data = {
    heading: (
      <span>
        Culin Ai - Revolutionizing F&B
        <br /> ERP Management
      </span>
    ),
    slug: "culin_ai",
    challenge:
      "SMEs in the F&B industry face the challenge of accessing affordable, high-end management systems tailored to their unique needs. Culin Ai aimed to bridge this gap by offering a first-of-its-kind Saudi-made comprehensive ERP management system catering specifically to SMEs.",
    our_solution:
      "We designed Culin Ai to encompass end-to-end tools, from POS and billing to complete ERP management. The focus was on delivering a cost-effective solution, granting SMEs access to sophisticated functionality and tools previously available only to larger enterprises.",
    our_solution_list: [
      "Tailored Solutions for SMEs",
      "End-to-End Functionality",
      "User-Friendly Interface",
      "Data-Driven Decision-Making",
      "Efficiency and Profitability",
      "Accessible Technology",
      "Holistic Business Solutions",
      "Market Competitiveness",
    ],
    the_solution:
      "Culin Ai became a game-changer for the F&B sector, offering a user-friendly interface coupled with powerful features. Its seamless integration of POS, billing, inventory, and ERP functionalities provided SMEs with a holistic solution to efficiently run and scale their businesses.",
    the_solution_list: [
      "Customizable Dashboard for SMEs",
      "Advanced Forecasting Tools",
      "AI-Integrated Inventory Management",
      "Cloud-Based Collaboration Platform",
    ],
    the_impact:
      "SMEs experienced heightened efficiency and streamlined operations, translating to improved profitability. Culin Ai empowered businesses with data-driven insights, enabling informed decision-making for sustainable growth within the competitive F&B landscape.",
    the_impact_list: [
      "30% Reduction in Operational Costs",
      "Enhanced Menu Planning Efficiency",
      "Improved Customer Satisfaction Metrics",
      "Streamlined Supply Chain Processes",
    ],
    conclusion: "",
    client: "Rahal - Internal Project",
    service: "SaaS System Development",
    industry: "F&B, Retail, ERP",
    stack: "React, ReactNative, MongoDB, Node.js",
    img_1: "img/projects/culin_1.jpg",
    img_2: "img/projects/culin_2.jpg",
    de: "Culin Ai democratized access to advanced management tools, making them accessible and affordable for SMEs.",
    cf: "The comprehensive suite of tools from POS to ERP ensured SMEs had a one-stop solution for their management needs.",
    dev: "Culin Ai's impact went beyond efficiency; it empowered SMEs to compete and thrive in the demanding F&B industry.",
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
              <div>
                {" "}
                {/* <p className="mil-dark">
                  <b>How This Tech Stack Benefits Your Project:</b>
                </p> */}
                <p>
                  <strong className="mil-dark">
                    1. Cross-Platform Development:{" "}
                  </strong>
                  React and React Native provide a unified development
                  experience, allowing you to build web and mobile applications
                  with shared code and components.
                </p>
                <p>
                  <strong className="mil-dark">2. Scalability: </strong>
                  Node.js, known for its event-driven architecture, enables
                  scalable server-side development, ensuring your applications
                  can handle increased user loads efficiently.
                </p>
                <p>
                  <strong className="mil-dark">
                    3. Flexibility in Data Handling:{" "}
                  </strong>
                  MongoDB's flexible schema and JSON-like documents make it
                  well-suited for projects where data structures may evolve over
                  time or have varying formats.
                </p>
                <p>
                  <strong className="mil-dark">4. Community Support: </strong>
                  The technologies in your stack enjoy widespread community
                  support and have vast ecosystems of libraries and tools,
                  ensuring you have access to a rich set of resources for
                  development and problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Affordability & Accessibility</h4>
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
                  <h4 className="mil-mb-30">Holistic Functionality</h4>
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
                  <h4 className="mil-mb-30">Empowering Growth</h4>
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
          <Link href="#" className="mil-slider-nav">
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
              href="project-2"
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
