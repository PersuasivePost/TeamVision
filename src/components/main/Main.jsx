import './Main.css'

export default function Main() {
    return (
        <div className="mainn">
            <h1>Immerse Yourself in the Future:</h1>
            <h1>Unleash Creativity with <span className='vision'>Team Vision’s</span> AR-VR Innovations!</h1>
            <div className='images'>
                <img src="/vision.jpeg" alt="Team Vision Logo" />
                {/* <img src={`${process.env.PUBLIC_URL}/vision.jpeg`} alt="description" />  */}
                <img src='visionfinal.png' alt="description" />
                {/* <img src={`${process.env.PUBLIC_URL}/visionfinal.png`} alt="description" /> */}
            </div>
            <h4>"Embark on an Unforgettable Journey: Explore the Boundless Future of AR and VR with Us!"</h4>
            <button>Join Us!</button>
        </div>
    )
}
