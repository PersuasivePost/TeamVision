import "./Projects.css"; // Importing the CSS for the project box styling

// The Project component receives the name, sur, and info as props
const Project = ({ name, sur, info}) => {
  return (
    <div className="project-box">
      <h3 className="project-name">{name}</h3>
      <h4 className="project-sur">{sur}</h4>
      <p className="project-info">{info}</p>
    </div>
  );
};

export default Project;
