import './Team.css';

const Teams = ({ name, role, img }) => {
    return (
        <div className="project-box">
            <img src={img} alt={name} className="team-image" />
            <h3 className="name">{name}</h3>
            <h4 className="position">{role}</h4> {/* Fixed typo here */}
            <p className="learn-more">Learn More</p>
        </div>
    );
}

export default Teams;
