import './Hero.css';
import './Ticker.css';

export default function Hero() { 
  return (
    <div>
      <div id="about-us">
		<div className="about-us">
			<h1>About Us!</h1>
			<p className='para'>
			  Welcome to Team Vision, official AR/VR Club at KJSCE! Our club is a vibrant community of innovators, tech enthusiasts, and creators who are passionate about exploring the limitless possibilities of augmented and virtual reality.
			</p>
		</div>
      </div>

      <div>
        <div id='upcoming-events' className='upcoming-events'>
          <h1 className='upcoming'>Upcoming Events</h1>
          <div className="ticker-container">
            <div className="ticker">
              <span>Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!!</span>
            </div>
          </div>
          <div className="ticker-container reverse">
            <div className="ticker">
              <span>Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!! &nbsp; Coming Soon!!</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
