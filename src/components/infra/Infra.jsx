import InfraCard from './Cardinfra';
import './Infra.css';

export default function Infra() {
    return (
        <div className="infra-section">
            <h1 className="infra-title">Infrastructure</h1>
            <div className="infra-card-container">
                <InfraCard 
                    name="Data Centers" 
                    description="High-performance data centers to support all your business needs."
                    img="https://via.placeholder.com/300" 
                />
                <InfraCard 
                    name="Cloud Services" 
                    description="Reliable cloud solutions for seamless business operations."
                    img="https://via.placeholder.com/300" 
                />
                <InfraCard 
                    name="Networking" 
                    description="Advanced networking to ensure connectivity and security."
                    img="https://via.placeholder.com/300" 
                />
            </div>
        </div>
    );
}
