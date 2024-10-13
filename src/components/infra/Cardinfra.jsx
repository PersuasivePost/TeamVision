import './Infra.css';

const InfraCard = ({ name, img, description }) => {
    return (
        <div className='infra'>
            <img src={img} alt={name} className="team-image" />
            <div className="overlay">
                <div className="text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default InfraCard;
