import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const footer = () => {
    return(
        <>
        <section className="contact-section">
        <h1>Get in Touch with Labnova</h1>
        <p>We are here to address your queries and collaboration interests.</p>
        <div className="contact-details">
            <div>
            <i class="fa-solid fa-phone"></i>
                <span>+91 9949551455</span>
            </div>
            <div>
            <i class="fa-solid fa-envelope"></i>
                <span>labnova.sales@gmail.com</span>
            </div>
        </div>
        <button>Contact Us</button>
    </section>

    <footer className="footer">
        <div className="footer-content">
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><i class="fa-sharp fa-regular fa-circle-arrow-right"></i><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Get in Touch</a></li>
                </ul>
            </div>
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Get in Touch</a></li>
                </ul>
            </div>
            <div>
                <h3>Corporate Office</h3>
                <p>Plot 66, , North kamala Nagar, New Sashikanth Nagar Plot 66 North Kamala Nagar New Sashikanth Nagar Medchal – Malkajgiri, 500062, Hyderabad, Hyderabad-500062, Telangana, India</p>
            </div>
            <div>
                <h3>Factory Address</h3>
                <p>S. No. 172(P), , Plot No.13C-2, Industrial Park, Phase-II,, Peddapuram, Kakinada District,, Andhra Pradesh 533437, India.
                <i class="fa-solid fa-envelope"></i>labnova.sales@gmail.com
                <i class="fa-solid fa-phone"></i>+919949551455</p>
            </div>
        </div>
        <div className="social-icons">
            <img src="src/assets/facebook.png" alt="Facebook"/>
            <img src="src/assets/twitter.png" alt="Twitter"/>
            <img src="src/assets/linkein.png" alt="LinkedIn"/>
            <img src="src/assets/youtube.png" alt="YouTube"/>
            <img src="src/assets/recording.jpeg" alt="Recording"/>
        </div>
        <p className="copyright">© All rights reserved 2024 Labnova | Design and Maintained by SKYHIT MEDIA</p>
    </footer>
    </>
    );
}

export default footer;
