import { motion, useScroll, useSpring } from "framer-motion";
import ApexBets from "../../assets/ApexBets.webp";
import Admin from "../../assets/admin.png";
import React, { useRef } from "react";

const Projects = [
  {
    id: 1,
    image: ApexBets,
    title: "Casino/Gambling Application",
    projectLink: "https://apex-bets.vercel.app/",
    githubLink: "",
    technology: ["Reactjs", "mongodb", "nodejs", "tailwind"],
    description: `ApexBets is a modern, user-friendly web application designed for online 
     gambling enthusiasts. It offers a fully responsive design, ensuring seamless access 
     across a variety of devices, including desktops, tablets, and mobile phones..
    `,
  },
  {
    id: 4,
    image: Admin,
    title: "Admin managent app",
    projectLink: "https://admingatu.netlify.app",
    githubLink: "https://github.com/brian070069/managment-application.git",
    technology: ["Reactjs", "Javascript", "tailwind", "HTML5"],
    description: `
           The admin management application is fully responsive and user-friendly, offering
            clear visual representations of data through charts Administrators can easily 
            view and update user and product information, 
            streamlining the management process.
    `,
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dumping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="Projects">
      <div className="progress">
        <h1>My Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {Projects.map((item) => {
        return (
          <section key={item.id}>
            <div className="portfolioContainer">
              <div className="Portfoliowrapper">
                <div className="portfolioImageContainer">
                  <img src={item.image} alt="" />
                </div>

                <motion.div
                  className="PortfoliotextContainer"
                  transition={{ duration: 1 }}
                >
                  <h2>{item.title}</h2>

                  <div className="technologies">
                    {item.technology.map((tech) => {
                      return <span style={{ whiteSpace: "wrap" }}>{tech}</span>;
                    })}
                  </div>

                  <p>{item.description}</p>

                  <div className="row portfolioLinks">
                    <a
                      href={item.projectLink}
                      target="_blank"
                      className="liveProjectlink"
                      style={{ padding: "10px 12px" }}
                      rel="noopener noreferrer"
                    >
                      Live Project
                    </a>
                    {/* <a
                      href={item.githubLink}
                      target="_blank"
                      className="githubLink"
                      rel="noopener noreferrer"
                    >
                      <img src="/skillsLogos/github.png" alt="" width={40} />
                      <h4>Github Code</h4>
                    </a> */}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Portfolio;
