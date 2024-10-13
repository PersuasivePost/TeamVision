import Project from "./Props"; // Importing the Project component
import "./projects.css"; // Importing the CSS for styling

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Our Projects</h2>

      <div className="projects-container">
        <Project 
          name="Walk The Plank" 
          sur="Experience the thrill of walking the plank on a 200th Storey Building in VR!" 
          info="Learn more →" 
        />
        <Project 
          name="Roller Coaster Simulation" 
          sur="Ride a Roller Coaster in the comfort of your Home." 
          info="Learn more →" 
        />
        <Project 
          name="Tower Crane Simulation" 
          sur="Our Industrial level Virtual Simulation for the piloting of a Crane." 
          info="Learn more →" 
        />
      </div>
    </div>
  );
};

export default Projects;
