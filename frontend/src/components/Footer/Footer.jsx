import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-content">
                <div class="footer-section about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@reactblog.com</p>
                    <p>Phone: +1 234 567 8901</p>
                    <p>Address: 123 Main Street, New York, NY 10001</p>
                </div>
                <div class="footer-section social-media">
                    <h2>Follow Us</h2>
                    <ul class="social-media-icons">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 React Blog. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
