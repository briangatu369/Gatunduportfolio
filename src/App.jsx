import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
// import Parallax from "./components/parallax/parallax";
import { Toaster, toast } from "sonner";
import Cursor from "./cursor/Cursor";

const App = () => {
  const skills = [
    {
      name: "React",
      logo: "/skillsLogos/react.png",
    },
    {
      name: "Nodejs",
      logo: "/skillsLogos/node.png",
    },
    {
      name: "JavaScript",
      logo: "/skillsLogos/javascript.png",
    },
    {
      name: "Mongodb",
      logo: "/skillsLogos/mongodb.png",
    },
    {
      name: "TypeScript",
      logo: "/skillsLogos/typescript.png",
    },
    {
      name: "Git",
      logo: "/skillsLogos/git.png",
    },
    {
      name: "Next.js",
      logo: "/skillsLogos/next.png",
    },

    {
      name: "Tailwind",
      logo: "/skillsLogos/tailwind.png",
    },
    {
      name: "CSS3",
      logo: "/skillsLogos/css.png",
    },
    {
      name: "GitHub",
      logo: "/skillsLogos/github.png",
    },
    {
      name: "HTML5",
      logo: "/skillsLogos/html.png",
    },
  ];

  return (
    <div>
      <Toaster richColors position="top-center" />
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section>
        <Parallax type={"services"} />
      </section> */}
      <section id="Skills" className="skills">
        <div className="skillsHeader">
          <h4>Skill and Stack</h4>
          <div></div>
        </div>
        <div className="skilsContainer">
          {skills.map((skill) => {
            return (
              <div className="skill">
                <div className="skillLogo">
                  <img src={skill.logo} alt="" />
                </div>
                <h4>{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section>
        <Parallax />
      </section> */}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
