import Teams from './Card'; // Adjusted import
import './Team.css';

export default function Team() {
    return (
        <div className="team-container">
            <h1 className="team-title">Meet the Team</h1>
            <div className="team-card">
                <Teams 
                    name="John Doe" 
                    role="CEO" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="Jane Doe" 
                    role="CTO" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="John Smith" 
                    role="COO" 
                    img="https://via.placeholder.com/300" 
                />
            </div>
            <div className="team-card">
                <Teams 
                    name="Alice Johnson" 
                    role="CFO" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="Robert Brown" 
                    role="CMO" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="Emily White" 
                    role="Lead Developer" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="David Green" 
                    role="Project Manager" 
                    img="https://via.placeholder.com/300" 
                />
                <Teams 
                    name="Sophia Black" 
                    role="UX Designer" 
                    img="https://via.placeholder.com/300" 
                />
            </div>
        </div>
    );
}
