import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">Follow Us</p>
            <div className="footer-icons">
                <img src='/image.png' alt="insta" />
                <img src='/image1.png' alt="whatsapp" />
                <img src='/image2.png' alt="linkedin" />

                {/* <img src={`${process.env.PUBLIC_URL}/image.png`} alt="description" />
                <img src={`${process.env.PUBLIC_URL}/image1.png`} alt="description" />
                <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="description" /> */}
            </div>
            <p className="footer-text">© 2024 Team Vision. All rights reserved.</p>
        </div>
    );
}