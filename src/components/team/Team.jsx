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
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="Jane Doe" 
                    role="CTO" 
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="John Smith" 
                    role="COO" 
                    img="/jesseowens.png" 
                />
            </div>
            <div className="team-card">
                <Teams 
                    name="Alice Johnson" 
                    role="CFO" 
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="Robert Brown" 
                    role="CMO" 
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="Emily White" 
                    role="Lead Developer" 
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="David Green" 
                    role="Project Manager" 
                    img="/jesseowens.png" 
                />
                <Teams 
                    name="Sophia Black" 
                    role="UX Designer" 
                    img="/jesseowens.png" 
                />
            </div>
        </div>
    );
}
